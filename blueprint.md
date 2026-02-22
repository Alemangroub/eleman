
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

-   **Add New Project (`/admin/add-project`):**
    -   A user-friendly form to create a new project.

-   **Project Details Page (`/admin/projects/[id]`):**
    -   Provides a central hub for a single project with navigation to its various sections.

-   **Project Items (البنود) Management (`/admin/projects/[id]/items`):**
    -   **Fully Responsive Design:** The layout is optimized for all screen sizes, with a card-based view on mobile.
    -   **Client-Side Operations:** All CRUD operations are handled on the client-side for a fast, seamless experience.
    -   **Data Filtering & Export:** Includes dynamic filtering and options to export data.

-   **Project Suppliers (الواردات) Management (`/admin/projects/[id]/suppliers`):**
    -   **Client-Side Data Handling:** All operations are handled on the client-side for a fast and responsive experience.

#### 2.2.2. Customer Contract & Installment Management

-   **Project Contracts Dashboard (`/admin/project-installments`):**
    -   **Fully Responsive Design:** Optimized for all screen sizes. On mobile, header controls and contract cards stack vertically for improved readability and usability.
    -   Provides a summary of total contracts, total amounts, and paid amounts for a specific project.
    -   Lists all customer contracts within the project, linking to a detailed view for each.

-   **Contract Details Page (`/admin/contract-details`):**
    -   Displays a complete summary of a single contract and its installment schedule.
    -   Allows admins to manage installment statuses.

-   **Installment Notifications (`/admin/notifications`):**
    -   Automatically displays overdue and upcoming installments for a project.

#### 2.2.3. Security & Authentication

-   **Role-Based Access Control:** All `/admin/...` sections are protected and accessible only by authenticated administrators.
-   **Secure Admin Login (`/admin`):** A dedicated login portal for administrators.
-   **Logout Functionality:** Secure session termination on all admin pages.

## 3. Previous Tasks

1.  **Fix "Items" Page Form Submission & Refine UX:** Refactored the "Items" page to use client-side form submission, resolving a server error and improving the user experience by implementing an automatic page reload after adding a new item.

2.  **Implement Responsive Design for "Items" Page:** Converted the data table on the "Items" page into a responsive, card-based layout for mobile devices and adjusted header controls for better usability on small screens.

## 4. Current Task: Implement Responsive Design for "Project Contracts" Page

### Plan & Steps for the requested change:

1.  **[Identify File]** Located the correct file for the page at `src/pages/admin/project-installments.astro`.
2.  **[Analyze Layout]** Reviewed the existing layout to identify areas for mobile improvement, specifically the header and the list of contract cards.
3.  **[Implement Responsive CSS]** Added a `@media (max-width: 768px)` block to the page's stylesheet.
4.  **[Adjust Header and Cards]** 
    -   Modified the page header and action buttons to stack vertically on small screens.
    -   Restyled the individual contract cards (`.contract-item`) to arrange the sub-details vertically, making them easier to read on narrow displays.
    -   Adjusted spacing and font sizes for a polished mobile experience.
5.  **[Update Blueprint]** Updated this `blueprint.md` file to document the implementation of the fully responsive design for the "Project Contracts" page.
