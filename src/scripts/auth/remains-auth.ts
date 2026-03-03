
import { auth, db } from "../../firebase/client";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export function initializeAuthCheck() {
  document.addEventListener('DOMContentLoaded', () => {
    const authLoadingMessage = document.getElementById('auth-loading-message');
    const pageContent = document.getElementById('page-content') as HTMLElement | null;

    if (!pageContent) {
      console.error("Page content element not found!");
      return;
    }

    const projectExists = pageContent.dataset.projectExists === 'true';
    const projectSupervisorId = pageContent.dataset.supervisorId;

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
            const isProjectSupervisor = user.uid === projectSupervisorId;

            if (isAdmin || isProjectSupervisor) {
              showPageContent();
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
