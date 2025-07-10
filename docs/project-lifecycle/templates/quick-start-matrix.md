# Project Lifecycle Quick Start Matrix

**Purpose**: Provide rapid navigation and decision support for teams starting new projects or joining existing ones, with clear entry points based on project status and methodology.

## Quick Assessment (2 minutes)

### Project Status Assessment
**Choose your current situation:**

| Situation | Quick Start Path | Estimated Time |
|-----------|------------------|----------------|
| 🆕 **New Project Idea** | [Conception Path](#new-project-path) | 5-10 minutes |
| 🔧 **Technology Decisions Needed** | [Technology Path](#technology-selection-path) | 3-5 minutes |
| 🚀 **Ready to Start Development** | [Development Path](#development-path) | 2-3 minutes |
| 🐛 **Encountering Issues** | [Troubleshooting Path](#troubleshooting-path) | 1-2 minutes |
| 📊 **Project Assessment** | [Assessment Path](#project-assessment-path) | 5-8 minutes |

## Quick Start Paths

### New Project Path
**For: Teams starting from an initial idea**

#### Step 1: Define Your Project (5 minutes)
- [ ] **Problem Statement**: What problem are you solving?
- [ ] **Target Users**: Who will use this solution?
- [ ] **Success Criteria**: How will you measure success?
- [ ] **Timeline Constraint**: When do you need this completed?

#### Step 2: Select Methodology (3 minutes)
Use the [Methodology Selection Decision Tree](../decision-trees/methodology-selection.md):

| Timeline | Complexity | Team Experience | Recommended Methodology |
|----------|------------|-----------------|------------------------|
| 2-4 weeks | Simple | Any | **MVP/Rapid** |
| 4-8 weeks | Moderate | Medium+ | **Balanced/Standard** |
| 8-12+ weeks | Complex | High | **Comprehensive/Enterprise** |

#### Step 3: Start Phase 0 (2 minutes)
- [ ] Go to [Project Conception](../00-project-conception/README.md)
- [ ] Use methodology-specific guidance
- [ ] Follow phase deliverables checklist

### Technology Selection Path
**For: Teams with defined requirements needing technology decisions**

#### Step 1: Assess Current State (2 minutes)
- [ ] **Requirements Documented**: Clear project requirements exist
- [ ] **Team Skills Known**: Team capabilities assessed
- [ ] **Constraints Identified**: Timeline, budget, compliance constraints known

#### Step 2: Choose Evaluation Approach (1 minute)
| Approach | Best For | Time Investment |
|----------|----------|-----------------|
| **Conservative/Proven** | Tight timeline, risk-averse | 2-3 days |
| **Modern/Cutting-Edge** | Innovation focus, learning opportunity | 3-4 days |
| **Hybrid/Balanced** | Production-ready with modern practices | 4-5 days |

#### Step 3: Start Technology Selection (2 minutes)
- [ ] Go to [Technology Stack Selection](../01-technology-stack-selection/README.md)
- [ ] Use chosen methodology guidance
- [ ] Follow evaluation matrix template

### Development Path
**For: Teams ready to start implementation**

#### Step 1: Validate Prerequisites (1 minute)
- [ ] **Technology Stack Selected**: All major technology decisions made
- [ ] **Project Setup Complete**: Development environment ready
- [ ] **Architecture Defined**: System design documented

#### Step 2: Identify Core Features (1 minute)
Check which core features you need:
- [ ] [Authentication](../../core-features/authentication/README.md) - User management
- [ ] [Database](../../core-features/database/README.md) - Data persistence
- [ ] [API](../../core-features/api/README.md) - Service layer
- [ ] [State Management](../../core-features/state-management/README.md) - Application state
- [ ] [Error Handling](../../core-features/error-handling/README.md) - Error management
- [ ] [Testing](../../core-features/testing/README.md) - Quality assurance

#### Step 3: Start Core Development (1 minute)
- [ ] Go to [Core Development](../04-core-development/README.md)
- [ ] Use [Core Features Integration Matrix](../integration-matrices/core-features-integration.md)
- [ ] Follow methodology-specific implementation guidance

### Troubleshooting Path
**For: Teams encountering issues or blockers**

#### Step 1: Identify Issue Type (30 seconds)
| Issue Type | Quick Action | Documentation |
|------------|--------------|---------------|
| **Development Blocker** | Create active blocker | [Troubleshooting System](../../development/troubleshooting/README.md) |
| **Technology Decision** | Review decision criteria | [Technology Selection](../01-technology-stack-selection/README.md) |
| **Implementation Pattern** | Check core features | [Core Features](../../core-features/README.md) |
| **Methodology Question** | Review methodology guidance | [Methodology Selection](../decision-trees/methodology-selection.md) |

#### Step 2: Search Existing Solutions (30 seconds)
- [ ] **Resolved Issues**: [Search resolved issues](../../development/troubleshooting/resolved-issues/)
- [ ] **Core Features**: Check relevant feature troubleshooting guides
- [ ] **Framework Patterns**: [Review framework-specific patterns](../../knowledge/framework-patterns/)

#### Step 3: Document and Resolve (1 minute)
- [ ] Create active blocker if needed
- [ ] Follow [Troubleshooting Integration](../integration-matrices/troubleshooting-integration.md)
- [ ] Document resolution for future reference

### Project Assessment Path
**For: Teams evaluating existing projects or planning improvements**

#### Step 1: Current Phase Assessment (2 minutes)
Identify where your project currently stands:

| Phase | Key Indicators | Next Steps |
|-------|----------------|------------|
| **Conception** | Requirements unclear, scope undefined | Complete [Phase 0](../00-project-conception/README.md) |
| **Technology Selection** | Tech stack decisions pending | Complete [Phase 1](../01-technology-stack-selection/README.md) |
| **Setup** | Development environment incomplete | Complete [Phase 2](../02-project-setup/README.md) |
| **Design** | Architecture not fully defined | Complete [Phase 3](../03-design-and-architecture/README.md) |
| **Development** | Core features in progress | Continue [Phase 4](../04-core-development/README.md) |
| **Quality Assurance** | Testing and validation needed | Start [Phase 5](../05-quality-assurance/README.md) |
| **Deployment Prep** | Production readiness needed | Start [Phase 6](../06-deployment-preparation/README.md) |
| **Production** | Live application management | Continue [Phase 7](../07-production-deployment/README.md) |

#### Step 2: Methodology Validation (2 minutes)
Assess if current methodology still fits:
- [ ] **Timeline Changes**: Has timeline shifted significantly?
- [ ] **Scope Changes**: Have requirements changed substantially?
- [ ] **Team Changes**: Has team composition or skill level changed?
- [ ] **Quality Changes**: Have quality or compliance requirements changed?

#### Step 3: Gap Analysis (3 minutes)
Identify missing elements:
- [ ] **Documentation Gaps**: Missing phase documentation
- [ ] **Core Feature Gaps**: Unimplemented essential features
- [ ] **Quality Gaps**: Missing testing or security measures
- [ ] **Process Gaps**: Missing troubleshooting or knowledge capture

## Methodology-Specific Quick Starts

### MVP/Rapid Quick Start (Total: 10-15 minutes)
1. **Define Core Problem** (3 minutes) - Single-page problem statement
2. **Select Proven Technologies** (5 minutes) - Use team's existing expertise
3. **Setup Basic Project** (5 minutes) - Minimal configuration
4. **Start Core Development** (2 minutes) - Focus on essential features

### Balanced/Standard Quick Start (Total: 20-30 minutes)
1. **Comprehensive Problem Analysis** (8 minutes) - Detailed requirements
2. **Evaluate Technology Options** (10 minutes) - Balanced evaluation matrix
3. **Setup Production Environment** (8 minutes) - Complete development setup
4. **Plan Core Development** (4 minutes) - Feature prioritization and planning

### Comprehensive/Enterprise Quick Start (Total: 45-60 minutes)
1. **Enterprise Requirements Analysis** (15 minutes) - Business case and compliance
2. **Comprehensive Technology Evaluation** (20 minutes) - Full evaluation process
3. **Enterprise Project Setup** (15 minutes) - Complete infrastructure setup
4. **Architecture Planning** (10 minutes) - Detailed system design

## Emergency Quick Actions

### Immediate Blockers (< 5 minutes)
- **Can't Start**: Use [New Project Path](#new-project-path)
- **Technology Paralysis**: Use [Conservative/Proven methodology](../01-technology-stack-selection/README.md)
- **Development Stuck**: Create [Active Blocker](../../development/troubleshooting/active-blockers/)
- **Quality Issues**: Check [Core Features](../../core-features/README.md) troubleshooting

### Time-Critical Decisions (< 15 minutes)
- **Methodology Selection**: Use [Decision Tree](../decision-trees/methodology-selection.md)
- **Technology Choice**: Use [Evaluation Matrix](../01-technology-stack-selection/README.md)
- **Feature Prioritization**: Use [Core Features Integration](../integration-matrices/core-features-integration.md)
- **Issue Resolution**: Use [Troubleshooting Integration](../integration-matrices/troubleshooting-integration.md)

## Navigation Shortcuts

### By Role
- **Project Manager**: [Methodology Selection](../decision-trees/methodology-selection.md) → [Phase Overview](../README.md)
- **Tech Lead**: [Technology Selection](../01-technology-stack-selection/README.md) → [Core Features](../../core-features/README.md)
- **Developer**: [Core Development](../04-core-development/README.md) → [Troubleshooting](../../development/troubleshooting/README.md)
- **QA Engineer**: [Quality Assurance](../05-quality-assurance/README.md) → [Testing](../../core-features/testing/README.md)

### By Framework
- **React**: [React-specific patterns](../../knowledge/framework-patterns/) → [React troubleshooting](../../development/troubleshooting/framework-specific/)
- **Vue**: [Vue-specific patterns](../../knowledge/framework-patterns/) → [Vue troubleshooting](../../development/troubleshooting/framework-specific/)
- **Angular**: [Angular-specific patterns](../../knowledge/framework-patterns/) → [Angular troubleshooting](../../development/troubleshooting/framework-specific/)

### By Problem Type
- **Requirements Issues**: [Project Conception](../00-project-conception/README.md)
- **Technology Issues**: [Technology Selection](../01-technology-stack-selection/README.md)
- **Implementation Issues**: [Core Features](../../core-features/README.md)
- **Quality Issues**: [Quality Assurance](../05-quality-assurance/README.md)

## Related Documentation

- [Project Lifecycle Overview](../README.md)
- [Methodology Selection Decision Tree](../decision-trees/methodology-selection.md)
- [Core Features Integration Matrix](../integration-matrices/core-features-integration.md)
- [Troubleshooting Integration](../integration-matrices/troubleshooting-integration.md)

---

*Quick Start Guide | Project Lifecycle Framework*  
*Methodology Support: MVP/Rapid, Balanced/Standard, Comprehensive/Enterprise*  
*Integration: All Project Phases, Core Features, Troubleshooting System*
