# Laravel Inertia Blueprint

This file defines the target backend and frontend architecture for converting this repo into a Laravel + Inertia application.

## Target Stack

- Laravel
- Inertia.js
- Vue 3
- Tailwind CSS
- MySQL or PostgreSQL
- Laravel queues for async processing
- Laravel policies for role-based access

## Target App Structure

Recommended Laravel structure:

- `app/Models/*`
- `app/Http/Controllers/Public/*`
- `app/Http/Controllers/SchoolAdmin/*`
- `app/Http/Controllers/Student/*`
- `app/Http/Controllers/Employer/*`
- `app/Http/Controllers/Api/*`
- `app/Services/*`
- `app/Actions/*`
- `app/Policies/*`
- `database/migrations/*`
- `database/seeders/*`
- `resources/js/Pages/Public/*`
- `resources/js/Pages/SchoolAdmin/*`
- `resources/js/Pages/Student/*`
- `resources/js/Pages/Employer/*`
- `resources/js/Components/*`
- `routes/web.php`
- `routes/api.php`

## Main Domain Modules

### 1. Schools / Tenants

Purpose:

- represent a school or institution on the platform
- define school branding and school-specific extension details
- scope students, staff, integrations, and reports to the institution

Core entities:

- School
- SchoolAdmin
- SchoolBranding
- SchoolSetting
- SchoolDomain or SchoolExtension

### 2. Students

Purpose:

- hold student identity, profile, academic, readiness, and recommendation-related data

Core entities:

- Student
- StudentProfile
- StudentDocument
- StudentAcademicRecord
- StudentResultImport
- StudentRecommendation
- StudentSavedOpportunity

### 3. Employers

Purpose:

- let employers register, manage company profiles, post roles, and review matches

Core entities:

- Employer
- EmployerUser
- EmployerProfile
- Opportunity
- CandidateMatch
- Application

### 4. Guidance and Events

Purpose:

- support career center workflows and student guidance activity

Core entities:

- GuidanceSession
- SessionBooking
- Event
- EventRegistration
- Resource

### 5. Integrations and API

Purpose:

- allow schools to push data into the platform
- support documented school integration workflows

Core entities:

- ApiClient
- ApiToken
- IntegrationLog
- ImportBatch
- WebhookEndpoint
- WebhookDelivery

### 6. Reporting and Outcomes

Purpose:

- surface school-level performance, recommendation readiness, placement trends, and other outcome indicators

Core entities:

- ReportSnapshot
- PlacementOutcome
- RecommendationMetric
- DashboardMetric

## Suggested Database Core Tables

Initial high-value tables:

- `users`
- `roles`
- `schools`
- `school_admins`
- `students`
- `student_profiles`
- `student_documents`
- `student_academic_records`
- `student_recommendations`
- `employers`
- `employer_profiles`
- `opportunities`
- `applications`
- `candidate_matches`
- `events`
- `resources`
- `guidance_sessions`
- `session_bookings`
- `api_clients`
- `integration_logs`
- `report_snapshots`

## Authentication Strategy

Recommended approach:

- one Laravel auth system
- role-aware access control
- school-scoped data visibility
- separate dashboards by role

Possible role set:

- `super_admin`
- `school_admin`
- `student`
- `employer`

## Route Strategy

### Web routes

Public:

- `/`
- `/docs`
- `/opportunities`
- `/opportunities/{slug}`
- `/events`
- `/resources`
- `/register`
- `/login`

School admin:

- `/school-admin/dashboard`
- `/school-admin/students`
- `/school-admin/academic-records`
- `/school-admin/integrations`
- `/school-admin/settings`
- `/school-admin/reports`

Student:

- `/student/dashboard`
- `/student/opportunities`
- `/student/guidance`
- `/student/resources`
- `/student/profile`

Employer:

- `/employer/dashboard`
- `/employer/opportunities`
- `/employer/matches`
- `/employer/events`
- `/employer/settings`

### API routes

School integration API examples:

- `POST /api/v1/schools/{school}/students`
- `POST /api/v1/schools/{school}/academic-records/import`
- `GET /api/v1/schools/{school}/recommendations`
- `GET /api/v1/schools/{school}/reports`

## Recommendation Engine Boundary

Do not bury recommendation logic directly inside controllers.

Recommended split:

- controller receives request
- service validates business context
- action or job prepares recommendation inputs
- recommendation service returns structured recommendations
- persistence layer stores recommendation snapshot

Possible services:

- `AcademicRecordImportService`
- `RecommendationEligibilityService`
- `CareerRecommendationService`
- `EmployerMatchService`
- `SchoolDashboardMetricsService`

## Frontend Migration Mapping

Current prototype page -> target Inertia page

- `src/pages/PublicHomePage.vue` -> `resources/js/Pages/Public/Home.vue`
- `src/pages/public/DocumentationPage.vue` -> `resources/js/Pages/Public/Docs.vue`
- `src/pages/admin/AdminPortal.vue` -> `resources/js/Pages/SchoolAdmin/*`
- `src/pages/student/StudentPortal.vue` -> `resources/js/Pages/Student/*`
- `src/pages/employer/EmployerPortal.vue` -> `resources/js/Pages/Employer/*`

Current public components under `src/components/public/*` should move to:

- `resources/js/Components/Public/*`

## Backend Priorities

Build backend in this order:

1. Auth and roles
2. Schools and school admin accounts
3. Students and academic records
4. Opportunities and employers
5. Guidance, resources, and events
6. Recommendations
7. Reporting and integrations

## Rules For Implementation

- avoid reintroducing prototype naming into Laravel
- do not recreate manual SPA routing
- keep recommendation logic service-driven
- keep school scoping explicit in queries and policies
- treat school integrations as first-class backend functionality, not an afterthought
