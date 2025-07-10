# Git Commit Conventions

**Purpose**: Standardized commit message conventions for consistent project history  
**Integration**: Supports automated changelog generation and semantic versioning

## Commit Message Format

### Standard Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Format Rules
- **Header**: `<type>(<scope>): <subject>` (required)
- **Body**: Detailed explanation (optional but recommended)
- **Footer**: Issue references and breaking changes (optional)
- **Line length**: Header ≤ 50 chars, body wrapped at 72 chars
- **Tense**: Use imperative mood ("add" not "added")

## Commit Types

### Primary Types

#### `feat` - New Features
```bash
feat(auth): implement JWT authentication system

Add complete JWT-based authentication with login, logout, and token
refresh functionality. Includes middleware for protected routes and
automatic token validation.

Closes #123
```

#### `fix` - Bug Fixes
```bash
fix(api): resolve null pointer exception in user endpoint

Handle case where user profile data is null to prevent server crashes.
Add proper error handling and return appropriate 404 responses.

Fixes #456
```

#### `docs` - Documentation
```bash
docs(feature-dev): add comprehensive feature planning template

Create detailed template for feature planning that includes methodology-
specific guidance, core features integration checklists, and risk
assessment sections.

Related to #789
```

#### `style` - Code Style
```bash
style(components): fix linting errors and formatting issues

Apply consistent formatting across all React components and fix
ESLint warnings. No functional changes.
```

#### `refactor` - Code Refactoring
```bash
refactor(database): optimize query performance and structure

Restructure database queries to use proper indexing and reduce
N+1 query problems. Improve overall database performance by 40%.

Performance improvement for #234
```

#### `test` - Testing
```bash
test(auth): add comprehensive unit tests for authentication

Add unit tests covering login, logout, token validation, and error
scenarios. Achieve 95% test coverage for authentication module.

Related to #345
```

#### `chore` - Maintenance
```bash
chore(deps): update dependencies to latest stable versions

Update React to 18.2.0, Node.js to 18.16.0, and other dependencies
to address security vulnerabilities and improve performance.

Security update for CVE-2023-1234
```

### Secondary Types

#### `perf` - Performance Improvements
```bash
perf(api): optimize database queries and caching

Implement Redis caching for frequently accessed data and optimize
database queries. Reduce API response time by 60%.

Performance improvement for #567
```

#### `ci` - CI/CD Changes
```bash
ci(github): add automated security scanning workflow

Add GitHub Actions workflow for automated security vulnerability
scanning on pull requests and main branch pushes.

Security enhancement for #678
```

#### `build` - Build System
```bash
build(webpack): optimize bundle size and build performance

Configure webpack for better tree shaking and code splitting.
Reduce bundle size by 30% and build time by 25%.

Build optimization for #789
```

#### `revert` - Reverts
```bash
revert: feat(payment): add cryptocurrency payment support

This reverts commit 1234567890abcdef due to security concerns
with the third-party crypto payment provider.

Reverts #890
```

## Scope Guidelines

### Core Feature Scopes
- `auth` - Authentication and authorization
- `api` - API endpoints and backend logic
- `database` - Database schema and queries
- `ui` - User interface components
- `state` - State management
- `error` - Error handling
- `test` - Testing infrastructure
- `docs` - Documentation

### Component-Specific Scopes
- `components` - React/Vue/Angular components
- `services` - Service layer logic
- `utils` - Utility functions
- `config` - Configuration files
- `middleware` - Middleware functions

### Infrastructure Scopes
- `ci` - Continuous integration
- `deploy` - Deployment configuration
- `docker` - Docker configuration
- `security` - Security-related changes

## Subject Line Guidelines

### Writing Effective Subjects
- **Be specific**: "fix login bug" → "fix null pointer in login validation"
- **Use imperative mood**: "add feature" not "added feature"
- **Avoid periods**: No trailing punctuation
- **Stay under 50 characters**: For better readability in git logs

### Good Examples
```bash
feat(auth): implement two-factor authentication
fix(api): resolve race condition in user creation
docs(readme): update installation instructions
refactor(utils): simplify date formatting functions
test(auth): add integration tests for login flow
```

### Bad Examples
```bash
# Too vague
fix: bug fix

# Wrong tense
feat(auth): added login functionality

# Too long
feat(auth): implement a comprehensive two-factor authentication system with SMS and email support

# Missing scope
feat: add user management

# Has period
fix(api): resolve validation error.
```

## Body Guidelines

### When to Include a Body
- **Complex changes**: Explain the reasoning behind the change
- **Breaking changes**: Describe what breaks and how to migrate
- **Performance impacts**: Quantify improvements or regressions
- **Security implications**: Explain security considerations

### Body Structure
```bash
feat(auth): implement OAuth2 integration

Add OAuth2 authentication support for Google and GitHub providers.
This allows users to sign in using their existing accounts instead
of creating new credentials.

Implementation includes:
- OAuth2 client configuration
- Provider-specific authentication flows
- User account linking and creation
- Secure token storage and refresh

The change maintains backward compatibility with existing email/password
authentication while providing users with additional sign-in options.

Closes #123
Related to #456
```

### Body Best Practices
- **Explain the why**: Not just what changed, but why it was necessary
- **Include context**: Help future developers understand the decision
- **List major changes**: Bullet points for complex changes
- **Mention side effects**: Any impacts on other parts of the system

## Footer Guidelines

### Issue References
```bash
# Closing issues
Closes #123
Fixes #456
Resolves #789

# Related issues
Related to #234
See also #567
Part of #890
```

### Breaking Changes
```bash
BREAKING CHANGE: remove deprecated user.getProfile() method

The user.getProfile() method has been removed in favor of the new
user.profile property. Update your code as follows:

Before: const profile = user.getProfile()
After:  const profile = user.profile
```

### Co-authored Commits
```bash
Co-authored-by: Jane Doe <jane@example.com>
Co-authored-by: John Smith <john@example.com>
```

## Methodology-Specific Guidelines

### MVP/Rapid Development
- **Focus on functionality**: Emphasize what the commit accomplishes
- **Keep it simple**: Shorter commit messages are acceptable
- **Essential information only**: Include only critical details

```bash
feat(auth): add basic login functionality
fix(api): resolve user creation error
docs(readme): update quick start guide
```

### Balanced/Standard Development
- **Include context**: Provide reasoning and background
- **Mention testing**: Reference test coverage or validation
- **Document decisions**: Explain technical choices

```bash
feat(auth): implement JWT authentication with refresh tokens

Add comprehensive authentication system using JWT tokens with
automatic refresh capability. Includes secure token storage
and proper error handling for expired tokens.

Tested with 95% coverage including edge cases.
Closes #123
```

### Comprehensive/Enterprise Development
- **Detailed explanations**: Comprehensive commit messages
- **Security considerations**: Document security implications
- **Performance metrics**: Include performance impact data
- **Compliance notes**: Reference relevant standards or requirements

```bash
feat(auth): implement enterprise SSO with SAML 2.0 support

Add enterprise single sign-on authentication supporting SAML 2.0
protocol for integration with corporate identity providers.

Implementation includes:
- SAML 2.0 assertion validation
- Encrypted assertion support
- Attribute mapping configuration
- Session management with enterprise policies
- Audit logging for compliance

Security features:
- Certificate-based signature validation
- Encrypted assertions support
- Configurable session timeouts
- Failed login attempt tracking

Performance impact:
- SSO login: <200ms average response time
- Session validation: <50ms average
- Memory usage: +15MB for SAML processing

Compliance:
- SOC 2 Type II compatible
- GDPR compliant user data handling
- Audit trail for all authentication events

Closes #123, #456, #789
Reviewed-by: Security Team
Tested-by: QA Team
```

## Automated Tools Integration

### Commit Message Validation
```bash
# Git hooks for commit message validation
#!/bin/sh
# .git/hooks/commit-msg

# Validate commit message format
if ! grep -qE "^(feat|fix|docs|style|refactor|test|chore|perf|ci|build|revert)(\(.+\))?: .{1,50}" "$1"; then
    echo "Invalid commit message format!"
    echo "Format: <type>(<scope>): <subject>"
    exit 1
fi
```

### Changelog Generation
Commit messages following these conventions enable automated changelog generation:

```markdown
## [1.2.0] - 2023-07-10

### Features
- **auth**: implement JWT authentication system (#123)
- **api**: add user profile management endpoints (#456)

### Bug Fixes
- **database**: resolve connection pool exhaustion (#789)
- **ui**: fix responsive layout on mobile devices (#234)

### Documentation
- **readme**: update installation and setup instructions (#567)
```

### Semantic Versioning
Commit types automatically determine version bumps:
- `feat`: Minor version bump (1.1.0 → 1.2.0)
- `fix`: Patch version bump (1.1.0 → 1.1.1)
- `BREAKING CHANGE`: Major version bump (1.1.0 → 2.0.0)

## Common Patterns and Examples

### Feature Development Cycle
```bash
# Initial feature implementation
feat(user-mgmt): implement user registration flow

# Bug fixes during development
fix(user-mgmt): resolve email validation edge case

# Testing additions
test(user-mgmt): add comprehensive registration tests

# Documentation updates
docs(user-mgmt): add user registration API documentation

# Final refinements
refactor(user-mgmt): optimize registration performance
```

### Hotfix Pattern
```bash
# Emergency fix
fix(security): patch SQL injection vulnerability in login

Critical security fix for SQL injection vulnerability in user
authentication. Implement proper parameterized queries and
input sanitization.

SECURITY: Addresses CVE-2023-1234
Fixes #URGENT-567
```

### Release Preparation
```bash
# Version bump
chore(release): bump version to 1.2.0

# Changelog update
docs(changelog): update for version 1.2.0 release

# Final release commit
release: version 1.2.0
```

---

*Commit Conventions | Part of Git Workflow and Policies*  
*Integration: Automated Changelog, Semantic Versioning, CI/CD*  
*Methodology Support: MVP/Rapid, Balanced/Standard, Comprehensive/Enterprise*
