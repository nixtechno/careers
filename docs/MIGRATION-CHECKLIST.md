# Migration Checklist

This file is the execution order for turning the current Vue prototype into the final Laravel + Inertia app.

## Phase 1: Consolidate The Prototype

- [x] Remove `SampleTwo.vue`
- [x] Remove `/sample` route from `src/App.vue`
- [x] Rename the public app entry to a real page name (`PublicHomePage.vue`)
- [x] Rename `src/components/sample-one/*` to `src/components/public/*`
- [x] Rename package metadata from `careers-samples` to `casec-platform`
- [x] Remove unused prototype files like `sample.vue`, `sample2.vue`, and `extra.vue`

## Phase 2: Prepare Laravel Shell

- [ ] Create Laravel application
- [ ] Install Inertia.js
- [ ] Install Vue 3 adapter
- [ ] Configure Tailwind inside Laravel
- [ ] Move global styles and theme behavior into Laravel frontend assets
- [ ] Recreate current page shell and layout structure in `resources/js`

## Phase 3: Port Frontend Surfaces

- [ ] Port public landing page
- [ ] Port docs page
- [ ] Port school admin portal shell
- [ ] Port student portal shell
- [ ] Port employer portal shell
- [ ] Port shared modals and shared components

## Phase 4: Implement Auth And Roles

- [ ] Implement user roles
- [ ] Add login flow
- [ ] Add registration flows
- [ ] Add school admin registration
- [ ] Add employer registration
- [ ] Add student onboarding strategy
- [ ] Add policies and middleware

## Phase 5: Implement Core Backend Modules

- [ ] Schools
- [ ] Students
- [ ] Academic records
- [ ] Opportunities
- [ ] Employers
- [ ] Events
- [ ] Resources
- [ ] Guidance sessions
- [ ] Reports

## Phase 6: Implement Recommendation Backbone

- [ ] Define recommendation input schema
- [ ] Define recommendation output schema
- [ ] Create recommendation service layer
- [ ] Create recommendation persistence
- [ ] Add recommendation dashboard widgets
- [ ] Add recommendation audit logging

## Phase 7: Implement Integration Layer

- [ ] API client model
- [ ] API tokens
- [ ] school-scoped API authentication
- [ ] student import endpoints
- [ ] academic record import endpoints
- [ ] import logs
- [ ] integration docs content backed by real endpoints

## Phase 8: Final Cleanup

- [ ] Remove remaining prototype-only helpers
- [ ] remove manual route switching
- [ ] remove static demo data where backend data exists
- [ ] review theme support in light and dark mode
- [ ] review route naming consistency
- [ ] review public copy consistency

## Non-Negotiable Naming Rules

- never reintroduce `SampleOne` into the final application
- never reintroduce `SampleTwo` into the final application
- never reintroduce `sample-one` as a directory name in the final application

## Recommended First Real Build Slice

If implementation starts now, the best first real vertical slice is:

1. Laravel + Inertia shell
2. Public landing page
3. School admin auth
4. School admin dashboard
5. Students module
6. Academic record import

That sequence turns the current design into a working school product fastest.
