import { auth, db } from "../../firebase/client";
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth"; // Explicitly import 'User' as a type
import { doc, getDoc } from "firebase/firestore";

// Define a callback function type that accepts user and role
type AuthCallback = (user: User, userRole: string) => void;

export function initializeAuthCheck(callback?: AuthCallback) {
  document.addEventListener('DOMContentLoaded', () => {
    const authLoadingMessage = document.getElementById('auth-loading-message');
    const pageContent = document.getElementById('page-content') as HTMLElement | null;

    if (!pageContent) {
      console.error("Page content element not found!");
      if(authLoadingMessage) authLoadingMessage.textContent = 'حدث خطأ في تحميل الصفحة.';
      return;
    }

    const projectExists = pageContent.dataset.projectExists === 'true';
    
    const showPageContent = () => {
      if (authLoadingMessage) authLoadingMessage.style.display = 'none';
      if (pageContent) pageContent.style.display = 'block';
    };

    if (!projectExists) {
      showPageContent();
      return; 
    }

    const unauthorizedRedirect = () => {
      window.location.href = '/crs';
    };

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            const userRole = userData.role;
            
            const isAdmin = userRole === 'admin';
            const isSupervisor = userRole === 'supervisor';
            
            const supervisorIdsString = pageContent.dataset.supervisorIds;
            const supervisorIds = supervisorIdsString ? JSON.parse(supervisorIdsString) : [];
            const isProjectSupervisor = supervisorIds.includes(user.uid);

            // User must be an Admin or a Supervisor assigned to this project
            if (isAdmin || (isSupervisor && isProjectSupervisor)) {
              const adminElements = pageContent.querySelectorAll('.admin-only');
              const supervisorAndAdminElements = pageContent.querySelectorAll('.supervisor-only');

              // Show admin-specific logs
              if (isAdmin) {
                adminElements.forEach(el => (el as HTMLElement).style.display = 'block');
              } else {
                 adminElements.forEach(el => (el as HTMLElement).style.display = 'none');
              }
              
              // Show forms for both Admin and assigned Supervisor
              supervisorAndAdminElements.forEach(el => (el as HTMLElement).style.display = 'block');

              showPageContent();

              if (callback) {
                callback(user, userRole);
              }

            } else {
              unauthorizedRedirect();
            }
          } else {
            unauthorizedRedirect();
          }
        } catch (error) {
          console.error("Authorization check failed:", error);
          unauthorizedRedirect();
        }
      } else {
        unauthorizedRedirect();
      }
    });
  });
}
