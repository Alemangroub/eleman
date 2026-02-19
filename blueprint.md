
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
    -   **Responsive Design:** The installments table transforms into a card-based view on mobile devices for better readability.

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

## 3. Previous Task: Make Installments Table Responsive

### Plan & Steps for the requested change:

1.  **[Identify Need]** The installments table on the `contract-details.astro` page was not user-friendly on mobile devices, requiring horizontal scrolling to view all data.
2.  **[Implement Responsive CSS]** Added a media query for screens up to `768px` wide.
    -   Hid the traditional `<thead>`.
    -   Converted each `<tr>` into a block-level element, styled to look like a card.
    -   Transformed each `<td>` to a flex container to align its content and a `::before` pseudo-element.
    -   Used the `data-label` attribute on each `<td>` to display the column header next to the data, creating a clear key-value pair format on mobile.
3.  **[Update JavaScript]** Modified the `renderInstallmentsTable` function to add the `data-label` attributes to each `<td>` element dynamically, ensuring the mobile view has the correct labels for each piece of data.
4.  **[Update Blueprint]** Updated this `blueprint.md` file to document the new responsive design for the table and mark the task as complete.

## 4. Current Task: Refactor Cost Pages into a Single Dynamic Route

### Plan & Steps for the requested change:

1.  **[Identify Problem]** The `src/pages/admin/projects/[id]/costs/` directory contained numerous individual, static `.astro` files for each cost type (e.g., `concrete-wages.astro`, `electrical-wages.astro`). This structure was highly inefficient, difficult to maintain, and not scalable for adding new cost categories.
2.  **[Delete Redundant Files]** Systematically deleted all the individual static cost pages from the `costs` directory to clean up the project structure.
3.  **[Create Dynamic Route]** Created a single dynamic Astro page: `src/pages/admin/projects/[id]/costs/[costType].astro`.
4.  **[Implement Dynamic Content]** This new page utilizes the `costType` parameter from the URL to dynamically fetch and display the relevant cost information. This approach simplifies the codebase, significantly improves maintainability, and allows for the easy addition of new cost types in the future without needing to create new files.
5.  **[Update Blueprint]** Updated this `blueprint.md` file to document the refactoring process and the new dynamic route structure.
