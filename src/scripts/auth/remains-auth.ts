import { checkAuth } from "../../lib/auth.js";

// Define a callback function type that accepts user and role
type AuthCallback = (user: any, userRole: string) => void;

export function initializeAuthCheck(callback?: AuthCallback) {
  document.addEventListener('DOMContentLoaded', async () => {
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

    const user = await checkAuth();
    if (user) {
      try {
        const response = await fetch(`/api/users/${user.userId}`);
        if (response.ok) {
          const userData = await response.json();
          const userRole = userData.role;
          
          const isAdmin = userRole === 'admin';
          const isSupervisor = userRole === 'supervisor';
          
          const supervisorIdsString = pageContent.dataset.supervisorIds;
          const supervisorIdsParsed = supervisorIdsString ? JSON.parse(supervisorIdsString) : [];
          const isProjectSupervisor = (userData.projectIds || []).includes(pageContent.dataset.projectId);

          if (isAdmin || (isSupervisor && isProjectSupervisor)) {
            const adminElements = pageContent.querySelectorAll('.admin-only');
            const supervisorAndAdminElements = pageContent.querySelectorAll('.supervisor-only');

            if (isAdmin) {
              adminElements.forEach(el => (el as HTMLElement).style.display = 'block');
            } else {
               adminElements.forEach(el => (el as HTMLElement).style.display = 'none');
            }
            
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
}
