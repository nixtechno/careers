# CASEC Platform

This repository currently contains the final Vue prototype for the CASEC platform and will be migrated into a Laravel application with a Vue frontend powered by Inertia.js.

The goal of this README set is simple: any engineer or AI agent should be able to enter the repo, understand the product, understand the current prototype, and start implementing the real application without spending unnecessary tokens or time re-analyzing the whole codebase.

## Product Summary

CASEC is a career intelligence platform for universities and similar institutions.

It connects:

- school onboarding and tenant setup
- student records and academic data
- AI-assisted career recommendations
- student guidance workflows
- employer opportunity publishing and candidate matching
- documentation for school integrations
- reporting and outcome tracking

The product currently supports four major surfaces in the prototype:

- Public marketing and documentation site
- School admin portal
- Student portal
- Employer portal

## Current Tech Stack

The current repository is a Vue 3 + Vite + Tailwind prototype.

- Vue 3
- Vite
- Tailwind CSS
- simple manual route switching in `src/App.vue`
- cookie-based theme switching

This is not the final architecture.

## Planned Tech Stack

The target implementation is:

- Laravel backend
- Inertia.js
- Vue frontend inside Laravel
- shared authentication and role-aware routing
- proper database-backed dashboards, records, recommendations, and employer workflows

## Important Current Status

Phase 1 cleanup is complete:

- `src/pages/PublicHomePage.vue` is now the real public app entry
- `src/components/public/*` is now the public component namespace
- `SampleTwo.vue` and the extra root sample files have been removed

Do not reintroduce prototype names like `SampleOne`, `SampleTwo`, or `sample-one`.

## Current Route Map

The current Vite prototype routes are manually mapped in `src/App.vue`.

- `/` -> public landing experience
- `/admin` -> school admin portal
- `/student` -> student portal
- `/employer` -> employer portal
- `/docs` -> API / integration documentation portal
- `/schools/signup` -> registration page for school and employer onboarding
- `/opportunities` -> public opportunities listing
- `/events` -> public events archive
- `/resources` -> public resources page
- `/donations/online` -> donation page
- `/donations/bank-details` -> donation page in bank mode
- `/contact` -> legacy contact route
- `/opportunities/:slug` -> public opportunity details

## Documentation Index

Read these files in order if you are taking over the project:

1. [docs/AI-HANDOFF.md](/C:/projects/careers/docs/AI-HANDOFF.md)
2. [docs/LARAVEL-INERTIA-BLUEPRINT.md](/C:/projects/careers/docs/LARAVEL-INERTIA-BLUEPRINT.md)
3. [docs/MIGRATION-CHECKLIST.md](/C:/projects/careers/docs/MIGRATION-CHECKLIST.md)

## Immediate Direction

The next major engineering phase is not more prototype branching. It is migration and consolidation.

That means:

- move from manual route switching to Laravel + Inertia routing
- replace static demo data with database-backed modules
- convert the portals into real authenticated applications

## Current Repo Map

High-level important areas:

- `src/pages/PublicHomePage.vue` -> current public app entry
- `src/components/public/*` -> current public site sections
- `src/pages/admin/AdminPortal.vue` -> school admin portal prototype
- `src/pages/student/StudentPortal.vue` -> student portal prototype
- `src/pages/employer/EmployerPortal.vue` -> employer portal prototype
- `src/pages/public/*` -> public supporting pages
- `src/components/shared/*` -> reusable modals / banners
- `src/components/portal/*` -> shared portal shell and empty page scaffolding
- `src/data/publicContent.js` -> prototype event and opportunity data
- `src/utils/navigation.js` -> current manual navigation helper

## Rule For Future Work

When implementing new work, optimize for the target Laravel/Inertia architecture, not for keeping the prototype structure forever.

If a change can be documented now and implemented properly in Laravel later, prefer documenting it rather than deepening the prototype in the wrong direction.
