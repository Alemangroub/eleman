
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

-   **Project Details Page (`/admin/projects/[id]`):**
    -   Provides a central hub for a single project, displaying its main information.
    -   Features navigation to "Daily Reports", "Expense Reports", "Project Installments", and "Items".

-   **Project Items (البنود) Management (`/admin/projects/[id]/items`):**
    -   A comprehensive page for managing project items (expenses, materials, etc.).
    -   **Fully Responsive Design:** The layout is optimized for all screen sizes. On mobile devices, the data table transforms into a user-friendly card-based view, and header/control elements stack vertically for easy access.
    -   **Client-Side Form Submission:** Item creation is handled on the client-side to prevent server-side errors and ensure a fast user experience.
    -   **Seamless Page Update:** The page automatically reloads after adding an item to display the latest data instantly.
    -   **Full CRUD (Create, Read, Update, Delete):** Allows admins to add, view, edit (inline), and delete items.
    -   **Data Filtering & Summaries:** Features dynamic filtering by category with real-time updates to totals.
    -   **Data Export:** Provides options to print, export to PDF, or export to Excel for individual items.

-   **Project Suppliers (الواردات) Management (`/admin/projects/[id]/suppliers`):**
    -   A page to track project supplies and purchases.
    -   **Client-Side Data Handling:** All operations are handled on the client-side for a fast and responsive experience.

#### 2.2.2. Customer Contract & Standalone Installment Management

-   **Installments Dashboard (`/admin/installments`):**
    -   Provides a summary of total contracts and amounts, and lists all customer contracts.

-   **Contract Details Page (`/admin/contract-details`):**
    -   Displays a complete summary of a single contract and its installment schedule.
    -   Allows admins to manage installment statuses and provides options to edit, delete, or print the contract.

-   **Installment Notifications (`/admin/notifications`):**
    -   Automatically displays overdue and upcoming installments.

#### 2.2.3. Security & Authentication

-   **Role-Based Access Control:** All `/admin/...` sections are protected and accessible only by authenticated administrators.
-   **Secure Admin Login (`/admin`):** A dedicated login portal for administrators.
-   **Logout Functionality:** Secure session termination on all admin pages.

## 3. Previous Task: Fix "Items" Page Form Submission & Refine UX

### Plan & Steps for the requested change:

1.  **[Fix Submission Error]** Refactored the "Items" page to handle form submissions on the client-side, resolving a "Forbidden" error and bypassing server-side CSRF issues.
2.  **[Refine UX]** Removed the pop-up success message after item creation. The page now reloads automatically to provide a smoother, more seamless experience.

## 4. Current Task: Implement Responsive Design for "Items" Page

### Plan & Steps for the requested change:

1.  **[Analyze Layout]** Reviewed the existing layout of the `items.astro` page to identify areas needing improvement on smaller screens, such as the header, filter controls, and the main data table.
2.  **[Implement Responsive CSS]** Added a `@media (max-width: 992px)` block to the page's stylesheet to apply specific styles for mobile and tablet devices.
3.  **[Transform Table to Cards]** The primary change was converting the wide data table into a vertical, card-based layout. Each row (`<tr>`) becomes a distinct card, and each cell (`<td>`) is displayed with a clear label (`::before` pseudo-element) for easy reading on narrow screens.
4.  **[Adjust Header and Controls]** Modified the page header, filter containers, and total-summary boxes to stack vertically, ensuring all controls are accessible and readable on mobile.
5.  **[Update Blueprint]** Updated this `blueprint.md` file to document the implementation of the fully responsive design for the "Items" page.
