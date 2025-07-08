# Git Branches Development Strategy & Static Deployment Guide

**Version**: 1.0  
**Created**: July 2025  
**Purpose**: Development workflow and deployment strategy for sandbox-driven development

## Overview

This guide outlines the git branching strategy and static deployment approach for projects using the docs-driven enhancement methodology. The strategy supports parallel development of alternative approaches while enabling rapid deployment and testing of different concepts.

## Git Branches Development Strategy

### Branch Structure

```
main
├── develop
├── sandbox/[feature-name]-methodology-a
├── sandbox/[feature-name]-methodology-b
├── sandbox/[feature-name]-methodology-c
├── feature/[feature-name]-implementation
└── release/[version-number]
```

### Branch Types and Purposes

#### 1. **Main Branch** (`main`)
- **Purpose**: Production-ready code only
- **Protection**: Protected branch with required reviews
- **Merges**: Only from `release/*` branches after full testing
- **Deployment**: Automatic deployment to production environment

#### 2. **Develop Branch** (`develop`)
- **Purpose**: Integration branch for completed features
- **Merges**: From `feature/*` branches after methodology selection
- **Testing**: Continuous integration and automated testing
- **Deployment**: Automatic deployment to staging environment

#### 3. **Sandbox Branches** (`sandbox/[feature-name]-methodology-[a|b|c]`)
- **Purpose**: Parallel development of alternative methodologies
- **Naming Convention**: `sandbox/design-system-methodology-a`
- **Independence**: Each methodology developed in isolation
- **Deployment**: Static deployment for comparison and evaluation

#### 4. **Feature Branches** (`feature/[feature-name]-implementation`)
- **Purpose**: Final implementation after methodology selection
- **Base**: Created from `develop` branch
- **Merges**: Back to `develop` after completion and testing

#### 5. **Release Branches** (`release/[version-number]`)
- **Purpose**: Preparation for production release
- **Base**: Created from `develop` branch
- **Merges**: To `main` and back to `develop`

### Workflow Process

#### Phase 1: Methodology Exploration
```bash
# Create sandbox branches for parallel methodology development
git checkout develop
git checkout -b sandbox/design-system-methodology-a
git checkout develop
git checkout -b sandbox/design-system-methodology-b
git checkout develop
git checkout -b sandbox/design-system-methodology-c

# Each team member or AI assistant works on different methodologies
# Develop and deploy each methodology independently
```

#### Phase 2: Methodology Evaluation
```bash
# Deploy all methodologies for comparison
# Use static deployment for rapid testing
# Collect feedback and performance data
# Document evaluation results in foundation document
```

#### Phase 3: Implementation
```bash
# Create feature branch based on selected methodology
git checkout develop
git checkout -b feature/design-system-implementation

# Implement chosen methodology
# Merge sandbox work into feature branch
git merge sandbox/design-system-methodology-a  # if methodology A selected

# Complete implementation and testing
git checkout develop
git merge feature/design-system-implementation
```

### Command-Line Workflow Integration

#### Using setup-dual-environments.bat
```bash
# Create new methodology workspace
setup-dual-environments.bat 1 docs-driven design-system

# This creates:
# - Git branch: sandbox/design-system-methodology-a
# - Documentation: docs/sandbox/design-system/01-methodology-a.md
# - Development environment for methodology A
```

#### Parallel Development Commands
```bash
# Switch between methodologies
git checkout sandbox/design-system-methodology-a
setup-dual-environments.bat 1 docs-driven design-system

git checkout sandbox/design-system-methodology-b
setup-dual-environments.bat 2 docs-driven design-system

git checkout sandbox/design-system-methodology-c
setup-dual-environments.bat 3 docs-driven design-system
```

## Static Deployment Options

### Overview
Static deployment enables rapid testing and comparison of different methodologies without backend infrastructure dependencies. Perfect for early MVP testing and design validation.

### Deployment Platforms

#### 1. **Vercel** (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from sandbox branch
git checkout sandbox/design-system-methodology-a
vercel --prod --name design-system-methodology-a

# Each methodology gets unique URL:
# https://design-system-methodology-a.vercel.app
# https://design-system-methodology-b.vercel.app
# https://design-system-methodology-c.vercel.app
```

#### 2. **Netlify**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy from sandbox branch
netlify deploy --prod --site design-system-methodology-a
```

#### 3. **GitHub Pages**
```bash
# Configure GitHub Actions for automatic deployment
# Each sandbox branch deploys to:
# https://username.github.io/project-name/methodology-a
```

### Next.js Static Export Configuration

#### next.config.js Setup
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Environment-specific configuration
  env: {
    SANDBOX_MODE: 'true',
    METHODOLOGY: process.env.METHODOLOGY || 'a'
  },
  // Asset prefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/project-name' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/project-name' : ''
}

module.exports = nextConfig
```

#### Package.json Scripts
```json
{
  "scripts": {
    "build:static": "next build",
    "export": "next export",
    "deploy:methodology-a": "METHODOLOGY=a npm run build:static && vercel --prod --name methodology-a",
    "deploy:methodology-b": "METHODOLOGY=b npm run build:static && vercel --prod --name methodology-b",
    "deploy:methodology-c": "METHODOLOGY=c npm run build:static && vercel --prod --name methodology-c",
    "deploy:all": "npm run deploy:methodology-a && npm run deploy:methodology-b && npm run deploy:methodology-c"
  }
}
```

### Mock Data Layer

#### Static JSON Data
```javascript
// lib/mockData.js
export const mockApiData = {
  users: [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
  ],
  products: [
    { id: 1, name: "Product A", price: 99.99 },
    { id: 2, name: "Product B", price: 149.99 }
  ]
}

// API simulation
export const mockApi = {
  getUsers: () => Promise.resolve(mockApiData.users),
  getProducts: () => Promise.resolve(mockApiData.products),
  createUser: (user) => {
    const newUser = { ...user, id: Date.now() }
    mockApiData.users.push(newUser)
    return Promise.resolve(newUser)
  }
}
```

#### LocalStorage for User Data
```javascript
// lib/localStorage.js
export const localStorageApi = {
  setItem: (key, value) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value))
    }
  },
  getItem: (key) => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    }
    return null
  },
  removeItem: (key) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key)
    }
  }
}
```

### Deployment Automation

#### GitHub Actions Workflow
```yaml
# .github/workflows/deploy-methodologies.yml
name: Deploy Methodologies

on:
  push:
    branches:
      - 'sandbox/**'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Extract methodology name
        id: methodology
        run: echo "name=${GITHUB_REF#refs/heads/sandbox/}" >> $GITHUB_OUTPUT
        
      - name: Build static site
        run: npm run build:static
        env:
          METHODOLOGY: ${{ steps.methodology.outputs.name }}
          
      - name: Deploy to Vercel
        run: vercel --prod --token ${{ secrets.VERCEL_TOKEN }} --name ${{ steps.methodology.outputs.name }}
```

### Comparison and Evaluation

#### Methodology Comparison Dashboard
```javascript
// components/MethodologyComparison.js
export default function MethodologyComparison() {
  const methodologies = [
    {
      name: 'Methodology A',
      url: 'https://methodology-a.vercel.app',
      description: 'Conservative approach with proven technologies'
    },
    {
      name: 'Methodology B', 
      url: 'https://methodology-b.vercel.app',
      description: 'Modern approach with cutting-edge technologies'
    },
    {
      name: 'Methodology C',
      url: 'https://methodology-c.vercel.app', 
      description: 'Hybrid approach balancing stability and innovation'
    }
  ]

  return (
    <div className="methodology-comparison">
      <h2>Methodology Comparison</h2>
      {methodologies.map(methodology => (
        <div key={methodology.name} className="methodology-card">
          <h3>{methodology.name}</h3>
          <p>{methodology.description}</p>
          <a href={methodology.url} target="_blank" rel="noopener noreferrer">
            View Live Demo
          </a>
        </div>
      ))}
    </div>
  )
}
```

## Best Practices

### 1. **Branch Naming Conventions**
- Use descriptive names: `sandbox/design-system-methodology-a`
- Include methodology identifier: `-methodology-[a|b|c]`
- Keep consistent with documentation structure

### 2. **Deployment Strategy**
- Deploy each methodology to unique subdomain/path
- Use environment variables to differentiate methodologies
- Maintain separate deployment configurations

### 3. **Documentation Synchronization**
- Keep git branches aligned with documentation structure
- Update foundation document with deployment URLs
- Document evaluation criteria and results

### 4. **Testing and Validation**
- Test each methodology independently
- Collect user feedback from deployed versions
- Performance test all methodologies under similar conditions
- Document comparison results for decision making

## Troubleshooting

### Common Issues

#### Static Export Errors
```bash
# Fix image optimization issues
# Add to next.config.js:
images: {
  unoptimized: true
}
```

#### Deployment Failures
```bash
# Clear Vercel cache
vercel --prod --force

# Check build logs
vercel logs [deployment-url]
```

#### Branch Conflicts
```bash
# Resolve conflicts between methodologies
git checkout develop
git merge --no-ff sandbox/methodology-a
# Resolve conflicts manually
git commit -m "Merge methodology A implementation"
```

This documentation provides a complete framework for managing parallel methodology development with efficient deployment and comparison capabilities.
