
# Blueprint: Elemannet - Project & Installment Management Dashboard

## 1. Overview

This application is a web-based project management dashboard named "Elemannet". It is designed for administrators to create, monitor, and manage various construction or contracting projects, as well as handle customer contracts and installment plans. The platform provides a centralized view of all projects and contracts, with detailed pages for tracking work progress, expenses, and payment schedules. Supervisors can submit daily reports and expense claims, while administrators manage the financial and contractual aspects.

## 2. Core Features & Design

### 2.1. General Style & Aesthetics

-   **Layout:** Modern, clean, and intuitive right-to-left (RTL) layout suitable for Arabic.
-   **Color Palette:** Primarily uses a professional combination of blues for primary actions, greens for success states, reds for danger/deletion, and varying shades of gray for backgrounds and text.
-   **Typography:** Utilizes the 'Cairo' font for a modern and readable Arabic interface.
-   **Components:** Features card-based design for projects and reports, clear navigation, and responsive layouts for both desktop and mobile.
-   **Interactivity:** Smooth transitions, hover effects, and custom-designed modals for confirmations to enhance user experience.

### 2.2. Implemented Features

#### 2.2.1. Project & Supervisor Management

-   **Admin Dashboard (`/admin/projects`):**
    -   Displays a list of all current projects in a grid of cards.
    -   Each project card shows the project name, client name, and city.
    -   Includes a prominent button to "Add a New Project".

-   **Add New Project (`/admin/add-project`):**
    -   A user-friendly form to create a new project.
    -   Upon successful submission, the admin is redirected back to the main project dashboard.

-   **Project Details Page (`/admin/projects/[id]`):**
    -   Provides a central hub for a single project, displaying its main information.
    -   Features navigation to "Daily Reports", "Expense Reports", and "Project Installments".

-   **Project Installment Management:**
    -   **Installments List (`/admin/project-installments`):** Displays a list of all financial installments associated with a specific project, showing amount, due date, and status (paid/unpaid).
    -   **Add Installment (`/admin/add-installment`):**
        -   A dedicated page with a form to add a new installment to a project.
        -   The form includes fields for Amount, Due Date, and Status.
        -   It links the new installment directly to the project via its ID.
        -   Redirects back to the project's installment list upon successful submission.

-   **Daily & Expense Reports (`/admin/projects/[id]/...`):**
    -   Admins can view all daily work and expense reports submitted for a project.
    -   Features include inline editing and safe deletion (with a confirmation modal) for all reports.

-   **Supervisor Submission Form (`/`):**
    -   A comprehensive form for supervisors to submit "Daily Reports" or an "Expense Reports" for their assigned projects, including image uploads.

#### 2.2.2. Customer Contract & Standalone Installment Management

-   **Installments Dashboard (`/admin/installments`):**
    -   Provides a summary of total contracts, total installment amounts, and total paid amounts.
    -   Lists all customer contracts with key details, linking to a detailed view for each.
    -   Includes a link to the notifications page and an action to add a new contract.

-   **Contract & Installment Creation (`/admin/add-installment`):**
    -   A guided form to create a new customer contract.
    -   Automatically generates an installment schedule based on the total amount and number of installments.
    -   Allows customization of individual installment amounts and due dates before saving.

-   **Contract Details Page (`/admin/contract-details`):**
    -   Displays a complete summary of a single contract.
    -   Lists all associated installments with their status (paid/unpaid), amount, and due date.
    -   Allows admins to toggle the status of each installment (with confirmation).
    -   Provides options to edit the entire contract, delete it, or print it.
    -   Includes a link to edit each individual installment.

-   **Installment Editing (`/admin/edit-installment`):**
    -   A dedicated page to modify the amount, due date, or status of a single installment.

-   **Contract Editing (`/admin/edit-contract`):**
    -   Allows modification of core contract details.
    -   Recalculates the schedule for *unpaid* installments if the total amount or number of installments is changed.

-   **Installment Notifications (`/admin/notifications`):**
    -   A dedicated page that automatically categorizes and displays unpaid installments that are either overdue or due within the next 7 days.

#### 2.2.3. Security & Authentication

-   **Role-Based Access Control:** A robust authentication system is implemented across all `/admin/...` sections, restricting access to `admin` users only.
-   **Secure Admin Login (`/admin`):** The generic `/admin` route serves as the primary login portal for administrators.
-   **Logout Functionality:** A "Logout" button is available on all admin pages for secure session termination.

## 3. Current Task: Add Project-Specific Installment Management

### Plan & Steps for the requested change:

1.  **[Completed] Add "Add Installment" Button:** Modified the `project-installments.astro` page to include a new "إضافة قسط" (Add Installment) button in the header.
2.  **[Completed] Create "Add Installment" Page:** Created a new page at `src/pages/admin/add-installment.astro`.
3.  **[Completed] Build the Form & Logic:**
    -   Designed a form with fields for amount, due date, and status.
    -   Added Firebase logic to fetch the project's name for the header.
    -   Implemented the `addDoc` function to save the new installment to the `installments` collection in Firestore, including the `projectId`.
4.  **[Completed] Implement Authentication:** Secured the new page to ensure only `admin` users can access it.
5.  **[Completed] Finalize Navigation:** Ensured that after adding an installment, the user is redirected back to the `project-installments` page to see the updated list.
6.  **[Completed] Update Blueprint:** Updated this `blueprint.md` file to document the new feature and mark the task as complete.
