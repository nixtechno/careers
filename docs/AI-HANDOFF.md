# AI Handoff

This file is the fast context file for any AI agent entering this repository.

## What This Project Is

This repository contains the current front-end prototype for the CASEC platform.

CASEC is a university-focused career intelligence platform that will eventually support:

- school onboarding and integration
- student signup under school-specific extensions
- academic record ingestion
- AI-assisted career path recommendations
- student support and guidance workflows
- employer role posting and candidate matching
- documentation for schools integrating into the platform
- school-level reporting and outcomes

## What This Project Is Not

This is not yet the production application.

It is currently:

- a Vite + Vue prototype
- manually routed in one SPA entry point
- partly populated with static content and demo data
- visually advanced enough to guide product implementation

## Most Important Product Roles

There are three main user roles plus a public experience:

1. School Admin
2. Student
3. Employer
4. Public / Documentation visitor

Platform-super-admin concerns exist conceptually, but the visible product work is currently centered on school, student, employer, and public documentation flows.

## Current State of Main App Areas

### Public app

Primary entry:

- `src/pages/PublicHomePage.vue`

This is the real public landing page and should become the final public app root when the migration happens.

Supporting public components currently live under:

- `src/components/public/*`

### School admin portal

- `src/pages/admin/AdminPortal.vue`

Contains current prototype screens for:

- dashboard
- students
- academic records
- integrations
- settings
- reports

### Student portal

- `src/pages/student/StudentPortal.vue`

Current direction:

- keep it simpler than before
- dashboard should not be overloaded
- career recommendation presence exists, but not every page should be recommendation-heavy

### Employer portal

- `src/pages/employer/EmployerPortal.vue`

Current direction:

- role posting
- candidate matches
- settings
- campus events

## Reusable Shared Pieces

Shared components:

- `src/components/shared/BookSessionModal.vue`
- `src/components/shared/EventDetailsModal.vue`
- `src/components/shared/InfoBanner.vue`
- `src/components/portal/PortalShell.vue`
- `src/components/portal/PortalIcon.vue`

## Current Navigation Model

The current app does not use Vue Router.

Instead it uses:

- `src/utils/navigation.js`

Routing is manually controlled inside:

- `src/App.vue`

This is temporary and should be replaced by Laravel routes + Inertia pages.

## Current Theme Model

Theme is managed by:

- `src/composables/useTheme.js`

Theme persistence is cookie-based:

- cookie name: `casec_theme`

When migrating to Laravel, preserve the same behavior unless a better persisted user preference model is introduced.

## Prototype Data Source

Prototype content is currently stored in:

- `src/data/publicContent.js`

This includes example:

- opportunities
- events

These should become database-backed records in Laravel.

## Naming Cleanup Required

The legacy sample names have already been removed from the active codebase.

Keep using:

- `PublicHomePage.vue`
- `src/components/public/*`
- future Laravel targets under `resources/js/Pages/Public/*`

## Safe Assumptions For Future Work

If you are implementing new work, assume:

- the public landing page is the real product direction
- admin, student, and employer portals are valid product surfaces
- docs portal is important and should remain a first-class experience
- the Laravel/Inertia migration is the intended backbone, not an optional idea

## What To Read Next

If you need implementation structure, read:

- [LARAVEL-INERTIA-BLUEPRINT.md](C:/projects/careers/docs/LARAVEL-INERTIA-BLUEPRINT.md)

If you need execution order, read:

- [MIGRATION-CHECKLIST.md](C:/projects/careers/docs/MIGRATION-CHECKLIST.md)
