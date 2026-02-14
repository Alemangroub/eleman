
# Blueprint: Elemannet - Project Management Dashboard

## 1. Overview

This application is a web-based project management dashboard named "Elemannet". It is designed for administrators to create, monitor, and manage various construction or contracting projects. The platform provides a centralized view of all projects, with detailed pages for each project to track daily work progress and expenses. Supervisors can submit daily reports and expense claims, including image attachments, directly from their mobile devices or desktops.

## 2. Core Features & Design

### 2.1. General Style & Aesthetics

-   **Layout:** Modern, clean, and intuitive right-to-left (RTL) layout suitable for Arabic.
-   **Color Palette:** Primarily uses a professional combination of blues for primary actions, greens for success states, reds for danger/deletion, and varying shades of gray for backgrounds and text.
-   **Typography:** Utilizes the 'Cairo' font for a modern and readable Arabic interface.
-   **Components:** Features card-based design for projects and reports, clear navigation, and responsive layouts for both desktop and mobile.
-   **Interactivity:** Smooth transitions, hover effects, and custom-designed modals for confirmations to enhance user experience.

### 2.2. Implemented Features

-   **Admin Dashboard (`/admin`):
    -   Displays a list of all current projects in a grid of cards.
    -   Each project card shows the project name, client name, and city.
    -   Includes a prominent button to "Add a New Project", which leads to the project creation page.

-   **Add New Project (`/admin/add-project`):
    -   A user-friendly form to create a new project.
    -   Fields include Project Name, Client Name, and City.
    -   Upon successful submission, the admin is redirected back to the main dashboard where the new project appears.

-   **Project Details Page (`/admin/projects/[id]`):
    -   Provides a central hub for a single project.
    -   Displays the project's main information.
    -   Features two main navigation buttons:
        -   "**Daily Reports**": Navigates to a page listing all daily progress reports for the project.
        -   "**Expense Reports**": Navigates to a page listing all expense reports for the project.

-   **Daily Reports Page (`/admin/projects/[id]/daily-reports`):
    -   Displays a list of all daily work reports submitted for the selected project, sorted by the newest first.
    -   Each report is shown on a card with the supervisor's name, timestamp, report details, notes, and any attached images.
    -   **Inline Editing**: Admins can click "Edit" on any report card to transform it into a form within the same page. They can modify the report text and notes and then save or cancel.
    -   **Safe Deletion**: A "Delete" button is available on each card. Clicking it opens a custom modal to confirm the action, preventing accidental deletions.

-   **Expense Reports Page (`/admin/projects/[id]/expense-reports`):
    -   Displays a list of all expense reports, sorted by the newest first.
    -   Each report card details the breakdown of expenses (e.g., steel, cement, labor), the total amount, supervisor's name, timestamp, notes, and attached receipts/images.
    -   **Inline Editing**: Similar to daily reports, admins can click "Edit" to modify expense values and notes directly on the card. The total is recalculated automatically as amounts are changed.
    -   **Safe Deletion**: A "Delete" button with a confirmation modal is implemented for safe and verified report deletion.

-   **Supervisor Submission Form (`/`):
    -   A comprehensive and user-friendly form for supervisors.
    -   Allows selection of the project they are reporting for from a dropdown list.
    -   Supervisors can enter their name.
    -   They can choose to submit either a "Daily Report" or an "Expense Report" via toggle buttons.
    -   **Conditional Fields** appear based on the report type selected, allowing entry of work details or itemized expenses.
    -   Includes a field for notes and a multi-file upload button for images/invoices.
    -   The form submits all data, including uploaded files, to the backend for processing and storage.

## 3. Current Task: Implementing Inline Editing & Deletion

### Plan & Steps for the requested change:

1.  **[Completed] Add Edit/Delete Buttons:** Add "Edit" and "Delete" buttons to each report card on both the `daily-reports` and `expense-reports` pages.
2.  **[Completed] Implement Custom Delete Modal:** Replace the browser's default `confirm()` pop-up with a custom, styled modal for a better user experience and to ensure compatibility with all browsers.
3.  **[Completed] Enable Delete Functionality:** Wire up the backend logic to handle the deletion of a report from the Firestore database when the action is confirmed in the modal.
4.  **[Completed] Implement Inline Editing (Expense Reports):** Develop the "inline editing" feature for the expense reports page. On clicking "Edit", the card will switch to a hidden form view, allowing the admin to update values. The implementation will ensure the layout remains stable.
5.  **[Completed] Implement Inline Editing (Daily Reports):** Apply the same stable and robust inline editing functionality to the daily reports page, ensuring a consistent user experience across the application.
6.  **[Completed] Update Blueprint:** Finalize the task by updating this `blueprint.md` file to reflect all the new features and changes implemented.
