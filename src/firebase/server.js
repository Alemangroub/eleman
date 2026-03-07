
import admin from 'firebase-admin';

// Hardcoded service account credentials
const serviceAccount = {
  "type": "service_account",
  "project_id": "elemancompany-2b00c",
  "private_key_id": "bcf91317e97b8286d916767a528d3e8a11a1dc30",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDIdAuV3IAP/xlw\noKmzh7cCjuvzg1yBd555CnyM9/FjZcDzPwaTQSjeIGTR3Z1xQRIMnJp3sIRyWOAz\n+ls40oaQaLgzKr6ytqvSnUPJh9reJpG7LwxCD3irE/kKOvYnPtWIV4aJHoVILVIa\nFCN6CG8B/Mhf29ZTbqOX3t1LHzXrb1iDrlR0Ad+pyahhbantDlX+HamnFWt7Evjd\nmZsB8Ij2Q93ci3/xxlKF69kYHcK/+yAHuJYm346nxTYrR+u+e/LJa+z+mqKSH4sl\nWWgIYhrPPNWEcmqKPRlHjlpy47UfmjXzhRtfEF/905GNe9rXHYzxI5hPmCCIaybC\nVejHlk5nAgMBAAECggEAVoBFU5lApiaGWuTp9nA1WGRGi+H+9FujRkZxMv/36dXK\nKu3ir37p3NkLyMiinXHgERMvUUEaFqIltihuXxnyObUG8AWdH0/W299Dll8K4tyv\n/J+z4Xn9r43B5VlGSe9ChECI7Pj/uQLdsCVKnemvxaLI8RzT41MWQ35H7pf8U6kH\n+3HJ7edVToSlYbhCszAMr4oJuzC3OEp+YRkmeLLdbovK7ieWLgBhA4HNrh0ezZlQ\nLyWhvburozhF2g6Jjcppcl+IMMoJ3nxz+O39MVHD/PyGQXEsgxi+7QSFwuYUCe8l\nRayy0v1zbcLeeM6zD0I0ULd88W6jHOKgeR2BP/HlsQKBgQDzdpxqgWQDNXWV5W8O\na/sz/EKBWEXG0qLc2de851Jz4Yk1E6HsCG/g8xkbE7nfSJPXO4HJdJYSiLplV8kS\nbBfe/ibr6XyPPDaJYNTmk2t0xui0Ode5SQWRyqDHaje53F8VB039TKpPA65egOMG\nr+bRoCKor/eJSdiCB918ktM/qQKBgQDSxndiMDs4Lgfo0txlZXDy9Wcr6uQUNLOT\nuzNbSR+rd6gUjKz2ZF4Z/L4TJu86GMN7KLDr2/Vzn1ZWBgeFDb2iw3LkkNRLsEz5\nIzqq1LKsmPUCYQyjuoVG29fn5IdP9lLJ6EcnMvlyia4ucdVJz8crY96tX2FCCsni\neXol96snjwKBgGQKz0dsl95Br2nC95mjgXvhIqrnzPRgRZAe6+mx3E3F1Y273YOS\nC/cRrbVUq8I2npmI2FIh2DERghZ2ticdx8lYAkJalVZ+VaKp6ZI97Z/0xFaaliyK\n9wDrlJmc6f0zstZ/Q+rb//er+ZDXwXJUAbMN7HAIrtz5PUBhXv/7jVbRAoGAKLgo\n1jJFLoxOAN/Drl8TnAxm2ygs2e54huDSgh81XBXoxdeLjqpDN7gJLIAIFWw1T7TD\nwT0kRSsSLdpKV50Y9rnVl2yXZuvvYu44ZkpjHk8KfmQrYfIlz1OneWg/7+XBhro2\nDM+fO0539QcO0oyuiKZpnYrgqjaVXAhl3bHkQecCgYBlfY9EGEA6HjlHEzlcNN+F\n8Oh+ZSDcVUGaMa434qRsDfGrjuh6NWY1Ym8uayFZIfvBXp79ASgW6d45cGzH6+Zj\nF5eX8fdSrsLekKcxrQEn5wzgYlu976omfp6GUcyZtpXOASSrgcsrm9jwdAY4SbrC\nZ8j8jhwVMVuM5mrz3M6CoA==\n-----END PRIVATE KEY-----",
  "client_email": "firebase-adminsdk-fbsvc@elemancompany-2b00c.iam.gserviceaccount.com",
};

let app;
try {
    if (!admin.apps.length) {
        app = admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
    } else {
        app = admin.app();
    }
} catch (error) {
    console.error("Firebase admin initialization error:", error);
}

export { app };

// Export functions that provide the auth and firestore services on demand.
export const getAdminAuth = () => app.auth();
export const getAdminDb = () => app.firestore();

// Export the classic, namespaced Timestamp constructor.
export const Timestamp = admin.firestore.Timestamp;
