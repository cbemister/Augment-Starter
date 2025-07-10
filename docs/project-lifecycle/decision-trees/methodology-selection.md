# Methodology Selection Decision Tree

**Purpose**: Guide teams through systematic methodology selection based on project constraints, team capabilities, and business requirements.

## Quick Assessment (5 minutes)

### Primary Decision Factors

**1. Timeline Constraint**
- ⚡ **Urgent (2-4 weeks)** → Consider MVP/Rapid
- ⏰ **Standard (4-8 weeks)** → Consider Balanced/Standard  
- 📅 **Flexible (8-12+ weeks)** → Consider Comprehensive/Enterprise

**2. Team Expertise Level**
- 🟢 **High expertise** → Any methodology suitable
- 🟡 **Medium expertise** → Balanced/Standard recommended
- 🔴 **Low expertise** → MVP/Rapid recommended

**3. Project Complexity**
- 🟢 **Simple (CRUD, basic features)** → MVP/Rapid suitable
- 🟡 **Moderate (multiple integrations)** → Balanced/Standard recommended
- 🔴 **Complex (enterprise features)** → Comprehensive/Enterprise required

## Detailed Decision Matrix

### Scoring System (1-5 scale)
- **5**: Strongly favors this methodology
- **4**: Favors this methodology  
- **3**: Neutral/acceptable
- **2**: Challenges this methodology
- **1**: Strongly challenges this methodology

### Decision Criteria

| Criteria | Weight | MVP/Rapid | Balanced/Standard | Comprehensive/Enterprise |
|----------|--------|-----------|-------------------|--------------------------|
| **Timeline Pressure** | 25% | 5 (2-4 weeks) | 4 (4-8 weeks) | 2 (8-12+ weeks) |
| **Team Experience** | 20% | 3 (any level) | 4 (medium+) | 5 (high level) |
| **Feature Complexity** | 20% | 5 (simple) | 4 (moderate) | 5 (complex) |
| **Quality Requirements** | 15% | 2 (basic) | 4 (production) | 5 (enterprise) |
| **Budget Constraints** | 10% | 5 (limited) | 3 (moderate) | 2 (flexible) |
| **Scalability Needs** | 10% | 2 (minimal) | 3 (moderate) | 5 (extensive) |

### Calculation Example
```
MVP/Rapid Score = (5×0.25) + (3×0.20) + (5×0.20) + (2×0.15) + (5×0.10) + (2×0.10) = 3.6
Balanced Score = (4×0.25) + (4×0.20) + (4×0.20) + (4×0.15) + (3×0.10) + (3×0.10) = 3.8
Enterprise Score = (2×0.25) + (5×0.20) + (5×0.20) + (5×0.15) + (2×0.10) + (5×0.10) = 4.0
```

## Methodology Profiles

### MVP/Rapid Methodology
**Best For**:
- Proof of concept projects
- Tight deadline constraints
- Simple feature requirements
- Limited budget/resources
- Quick market validation needs

**Characteristics**:
- ⚡ **Speed**: 2-4 week delivery
- 🎯 **Scope**: Core features only
- 👥 **Team**: 1-2 developers
- 🧪 **Testing**: Basic unit tests
- 📚 **Documentation**: Minimal but essential

**Risk Factors**:
- Technical debt accumulation
- Limited scalability planning
- Reduced error handling
- Minimal security hardening

**Success Indicators**:
- Clear, simple requirements
- Experienced team lead
- Stakeholder alignment on MVP scope
- Defined post-MVP enhancement plan

### Balanced/Standard Methodology
**Best For**:
- Production applications
- Standard business requirements
- Moderate complexity projects
- Balanced timeline and quality needs
- Growing team capabilities

**Characteristics**:
- ⏰ **Speed**: 4-8 week delivery
- 🎯 **Scope**: Essential features + enhancements
- 👥 **Team**: 2-3 developers
- 🧪 **Testing**: Comprehensive test coverage
- 📚 **Documentation**: Production-ready docs

**Risk Factors**:
- Scope creep potential
- Balancing speed vs quality
- Team coordination complexity
- Technology learning curves

**Success Indicators**:
- Well-defined requirements
- Experienced team members
- Clear quality standards
- Stakeholder commitment to timeline

### Comprehensive/Enterprise Methodology
**Best For**:
- Enterprise applications
- Complex business requirements
- High security/compliance needs
- Long-term strategic projects
- Large team coordination

**Characteristics**:
- 📅 **Speed**: 8-12+ week delivery
- 🎯 **Scope**: Full feature set + advanced capabilities
- 👥 **Team**: 3+ developers + specialists
- 🧪 **Testing**: Extensive testing strategy
- 📚 **Documentation**: Enterprise-grade documentation

**Risk Factors**:
- Over-engineering potential
- Extended timeline risks
- High resource requirements
- Complex coordination needs

**Success Indicators**:
- Complex, well-documented requirements
- Senior development team
- Enterprise stakeholder support
- Long-term strategic alignment

## Decision Tree Flowchart

```
Start: Project Requirements Defined
│
├─ Timeline < 4 weeks?
│  ├─ Yes → Simple features?
│  │  ├─ Yes → MVP/Rapid ✅
│  │  └─ No → Reduce scope or extend timeline
│  └─ No → Continue
│
├─ Enterprise requirements?
│  ├─ Yes → Team has enterprise experience?
│  │  ├─ Yes → Comprehensive/Enterprise ✅
│  │  └─ No → Hire expertise or choose Balanced
│  └─ No → Continue
│
├─ Complex integrations needed?
│  ├─ Yes → Timeline > 6 weeks?
│  │  ├─ Yes → Balanced/Standard ✅
│  │  └─ No → Simplify or extend timeline
│  └─ No → Continue
│
└─ Default → Balanced/Standard ✅
```

## Validation Checklist

### Before Final Selection
- [ ] All stakeholders understand methodology implications
- [ ] Team capabilities align with methodology requirements
- [ ] Timeline and budget realistic for chosen methodology
- [ ] Quality requirements match methodology outputs
- [ ] Risk mitigation strategies identified
- [ ] Success criteria defined and measurable

### Red Flags (Reconsider Selection)
- ❌ Team lacks required expertise for chosen methodology
- ❌ Timeline unrealistic for methodology scope
- ❌ Budget insufficient for methodology requirements
- ❌ Stakeholder expectations misaligned with methodology
- ❌ Quality requirements exceed methodology capabilities

## Methodology Switching Guidelines

### When to Switch Methodologies
- **Scope Changes**: Significant requirement additions or reductions
- **Timeline Changes**: Major deadline shifts or extensions
- **Team Changes**: Significant skill level or size changes
- **Quality Changes**: New compliance or performance requirements

### Switching Process
1. **Document Current State**: Capture progress and decisions
2. **Assess Impact**: Evaluate switching costs and benefits
3. **Stakeholder Approval**: Get approval for methodology change
4. **Update Documentation**: Revise plans and expectations
5. **Team Communication**: Ensure team understands changes

## Integration with Project Lifecycle

### Phase 0 (Conception)
- Initial methodology assessment based on requirements
- Preliminary team and timeline evaluation
- Stakeholder expectation setting

### Phase 1 (Technology Selection)
- Methodology influences technology choices
- Technology complexity affects methodology feasibility
- Final methodology confirmation

### Phase 2+ (Implementation)
- Methodology guides implementation approach
- Regular methodology validation checkpoints
- Adjustment opportunities at phase boundaries

## Related Documentation

- [Project Conception](../00-project-conception/README.md)
- [Technology Stack Selection](../01-technology-stack-selection/README.md)
- [Core Development](../04-core-development/README.md)
- [Troubleshooting System](../../development/troubleshooting/README.md)

---

*Decision Support Tool | Project Lifecycle Framework*  
*Methodology Support: MVP/Rapid, Balanced/Standard, Comprehensive/Enterprise*  
*Integration: All Project Phases, Core Features, Team Assessment*
