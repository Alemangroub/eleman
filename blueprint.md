
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

-   **Admin Dashboard (`/admin/projects`):** Displays a list of all current projects.
-   **Add New Project (`/admin/add-project`):** A form to create a new project.
-   **Project Details Page (`/admin/projects/[id]`):** A central hub for a single project.
-   **Project Items (البنود) Management (`/admin/projects/[id]/items`):** Client-side CRUD operations with filtering and export.
-   **Project Suppliers (الواردات) Management (`/admin/projects/[id]/suppliers`):** Client-side data handling.

#### 2.2.2. Customer Contract & Installment Management

-   **Project Contracts Dashboard (`/admin/project-installments`):** A responsive dashboard summarizing contracts and payments for a project.
-   **Contract Details Page (`/admin/contract-details`):** Displays a complete summary of a single contract and its installment schedule.
-   **Installment Notifications (`/admin/notifications`):** Automatically displays overdue and upcoming installments.

#### 2.2.3. Expense Report Management

-   **Expense Reports Page (`/admin/projects/[id]/expense-reports`):**
    -   Displays a list of all expense reports for a project.
    -   **Full Edit Functionality:** Administrators can now edit expense reports directly.
    -   **View/Edit Modes:** Each report card has a "View Mode" for display and an "Edit Mode" with a form to correct item names, amounts, and notes.
    -   **Data Structure Correction:** The update logic now saves data in a clean, structured `items` array, fixing the root cause of the "name-as-amount" bug.
    -   **Legacy Data Handling:** Reports with the old data bug are intelligently displayed with "بند غير مسمى" (Unnamed Item) for clarity.
    -   **Real-time Total Calculation:** The total amount is recalculated instantly as amounts are edited in the form.

#### 2.2.4. Security & Authentication

-   **Role-Based Access Control:** All `/admin/...` sections are protected and accessible only by authenticated administrators.
-   **Secure Admin Login (`/admin`):** A dedicated login portal for administrators.
-   **Logout Functionality:** Secure session termination on all admin pages.
-   **Firebase Client-Side Configuration:** The `src/firebase/client.js` module is now correctly configured to initialize and export all necessary Firebase services (`app`, `db`, `auth`, `storage`, `firebaseConfig`).

## 3. Previous Tasks

1.  **Fix Firebase Module Exports:**
    -   **Problem:** The application was crashing with `SyntaxError` because various components were attempting to import Firebase services (`app`, `firebaseConfig`, `storage`) that were not being exported from the central Firebase client module (`src/firebase/client.js`).
    -   **Action:** Investigated the module and found missing export statements.
    -   **Solution:** Modified `src/firebase/client.js` to correctly initialize and export `app`, `firebaseConfig`, and `storage`. Also identified that a lingering cache issue in the development server was preventing the fix from applying immediately, which was resolved by a server refresh.

2.  **Fix Expense Report Data & Implement Edit Functionality:**
    -   **Problem:** Expense report items were displaying amounts instead of names due to an incorrect data structure.
    -   **Solution:** Implemented a full "Edit Mode" for reports, allowing administrators to correct data. Rewrote the backend logic to handle a proper `items` array.

3.  **Implement Responsive Design for Multiple Pages:**
    -   Converted the layouts for the "Project Contracts" and "Items" pages to be fully responsive and mobile-friendly.

4.  **Fix "Items" Page Form Submission & Refine UX:**
    -   Refactored the "Items" page to use client-side form submission, improving user experience by preventing a full page reload on new item creation.

## 4. Current Task

The application is currently in a stable state with all requested features implemented and bugs fixed. Awaiting the next user request.
