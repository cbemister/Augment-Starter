# Bug Tracking Document Template

## Bug Identification
**Bug ID**: [Unique identifier - e.g., FEATURE-COMPONENT-TYPE-001]
**Date Reported**: [YYYY-MM-DD]
**Reporter**: [Name/Role of person who discovered the bug]
**Severity**: [Critical/High/Medium/Low]
**Status**: [In Progress/Resolved/Closed]

### Summary
[Brief, clear description of the bug in 1-2 sentences. Focus on the user-visible impact and core problem.]

### Environment
- **Application Version**: [Version number or commit hash]
- **Browser/Platform**: [Browser versions, operating systems, or platforms affected]
- **Environment**: [Development/Staging/Production]

## Root Cause Analysis

### Technical Analysis
[Detailed technical explanation of what's causing the bug. Include:]
- [Primary cause of the issue]
- [Secondary contributing factors]
- [System components involved]
- [Why the bug manifests in this specific way]

### Contributing Factors
[List of factors that contributed to the bug occurring:]
- [Factor 1 - e.g., Missing validation, Race conditions, etc.]
- [Factor 2 - e.g., Inadequate error handling, etc.]
- [Factor 3 - e.g., Insufficient testing coverage, etc.]

### Code Analysis
**Problematic Code in `[file-path]`:**

```[language]
// [Brief description of what's wrong]
[Code snippet showing the problematic implementation]

// [Explanation of why this code causes the issue]
```

## Reproduction Steps

### Prerequisites
[Any setup required to reproduce the bug:]
- [Prerequisite 1 - e.g., Specific user state, data conditions]
- [Prerequisite 2 - e.g., Browser settings, feature flags]
- [Prerequisite 3 - e.g., Network conditions, timing requirements]

### Steps to Reproduce
1. [Step 1 - Be specific and actionable]
2. [Step 2 - Include exact user actions]
3. [Step 3 - Note any timing or sequence requirements]
4. [Step 4 - Describe the trigger action]

### Expected Behavior
[Clear description of what should happen when the steps are followed correctly]

### Actual Behavior
[Clear description of what actually happens, including:]
- [Visible symptoms]
- [Error messages]
- [Performance impacts]
- [User experience issues]

## Resolution Attempts

### Attempt 1
**Date**: [YYYY-MM-DD]
**Approach**: [Description of the attempted solution]
**Outcome**: [Success/Failure and detailed explanation]
**Code Changes**: [Brief description of changes made, if any]

### Attempt 2
**Date**: [YYYY-MM-DD]
**Approach**: [Description of the attempted solution]
**Outcome**: [Success/Failure and detailed explanation]
**Code Changes**: [Brief description of changes made, if any]

[Add additional attempts as needed]

## Final Resolution

### Solution Implemented
[Detailed description of the final working solution, including:]
- [High-level approach taken]
- [Key technical decisions made]
- [Why this solution addresses the root cause]

### Code Changes
**File: `[file-path]`**
[List all files modified and key changes made:]
- [Change 1 - e.g., Fixed dependency array in useEffect]
- [Change 2 - e.g., Added proper error handling]
- [Change 3 - e.g., Implemented rate limiting]

**Key Changes:**
```[language]
// Before: [Description of original problematic code]
[Original code snippet]

// After: [Description of fixed code]
[Fixed code snippet]
```

### Testing Performed
[Description of testing done to verify the fix:]
1. [Test 1 - e.g., Verified original reproduction steps no longer cause issue]
2. [Test 2 - e.g., Tested edge cases and boundary conditions]
3. [Test 3 - e.g., Performed regression testing on related functionality]
4. [Test 4 - e.g., Validated performance improvements]

### Verification Steps
[Steps others can follow to verify the bug is resolved:]
1. [Verification step 1]
2. [Verification step 2]
3. [Verification step 3]

## Prevention Measures

### Process Improvements
[Changes to development/testing processes to prevent similar bugs:]
1. [Process improvement 1 - e.g., Add specific code review checklist items]
2. [Process improvement 2 - e.g., Implement additional testing protocols]
3. [Process improvement 3 - e.g., Update development guidelines]

### Code Quality Measures
[Technical measures to prevent similar issues:]
1. [Code quality measure 1 - e.g., Add TypeScript strict checks]
2. [Code quality measure 2 - e.g., Implement automated testing]
3. [Code quality measure 3 - e.g., Add linting rules]

### Monitoring/Alerting
[Monitoring or alerting to catch similar issues early:]
1. [Monitoring measure 1 - e.g., Add performance monitoring]
2. [Monitoring measure 2 - e.g., Implement error tracking]
3. [Monitoring measure 3 - e.g., Set up automated health checks]

## Related Issues

### Similar Bugs
[Links or references to related bug reports or issues:]
- [Related issue 1 - with brief description]
- [Related issue 2 - with brief description]

### Follow-up Tasks
[Additional work needed as a result of this bug:]
- [Task 1 - e.g., Review similar patterns in other components]
- [Task 2 - e.g., Update documentation]
- [Task 3 - e.g., Implement additional safeguards]

### Documentation Updates
[Documentation that needs updating as a result of this bug:]
- [Documentation update 1]
- [Documentation update 2]

## Lessons Learned

### Technical Insights
[Key technical lessons learned from this bug:]
1. [Technical insight 1 - e.g., Specific patterns to avoid]
2. [Technical insight 2 - e.g., Better approaches for similar problems]
3. [Technical insight 3 - e.g., Tools or techniques that would have helped]

### Process Insights
[Lessons about development processes and methodology:]
1. [Process insight 1 - e.g., Testing gaps that were revealed]
2. [Process insight 2 - e.g., Communication improvements needed]
3. [Process insight 3 - e.g., Review process enhancements]

### Recommendations
[Actionable recommendations for future development:]
1. [Recommendation 1 - e.g., Adopt specific coding patterns]
2. [Recommendation 2 - e.g., Implement additional tooling]
3. [Recommendation 3 - e.g., Update team practices]

---

## Template Usage Instructions

### How to Use This Template
1. **Copy this template** for each new bug report
2. **Replace all bracketed placeholders** with actual information
3. **Remove instructional text** (like this section) from the final document
4. **Follow the naming convention**: `DESCRIPTIVE_NAME_ISSUE.md`
5. **Update status** as the bug progresses through resolution

### Section Guidelines
- **Bug Identification**: Keep summary concise but descriptive
- **Root Cause Analysis**: Be thorough - this is the most important section
- **Reproduction Steps**: Make them specific enough for others to follow
- **Resolution Attempts**: Document failed attempts to help others avoid same paths
- **Final Resolution**: Focus on what worked and why
- **Prevention Measures**: Think systematically about preventing similar issues
- **Lessons Learned**: Extract actionable insights for future development

### Best Practices
- **Be Specific**: Use exact error messages, file paths, and line numbers
- **Include Context**: Provide enough background for others to understand
- **Document Everything**: Even failed attempts provide valuable information
- **Think Prevention**: Always consider how to prevent similar issues
- **Update Regularly**: Keep the document current as investigation progresses
