
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

// --- تهيئة Firebase Admin SDK ---

// استرداد بيانات اعتماد الخدمة من متغيرات البيئة.
// هذا الإجراء آمن ويتجنب كتابة البيانات الحساسة مباشرة في الكود.
const serviceAccountString = import.meta.env.FIREBASE_SERVICE_ACCOUNT;

// التحقق من وجود متغير البيئة
if (!serviceAccountString) {
  // إذا كان المتغير غير موجود، يتم إيقاف التشغيل مع رسالة خطأ واضحة.
  // هذا يمنع الأخطاء الغامضة ويخبر المطور بالضبط ما يجب فعله.
  console.error('ERROR: The FIREBASE_SERVICE_ACCOUNT environment variable is not set.');
  throw new Error('The FIREBASE_SERVICE_ACCOUNT environment variable is not set. Please add your service account JSON to your project secrets.');
}

let serviceAccount;
try {
  // محاولة تحليل سلسلة JSON إلى كائن JavaScript
  serviceAccount = JSON.parse(serviceAccountString);
} catch (e) {
  console.error('ERROR: Failed to parse the FIREBASE_SERVICE_ACCOUNT string. Make sure it is a valid JSON.');
  throw new Error('Failed to parse the FIREBASE_SERVICE_ACCOUNT. Ensure it is copied correctly and is a valid JSON string.');
}

// تهيئة تطبيق Firebase فقط إذا لم يكن قد تم تهيئته من قبل.
// هذا يمنع حدوث أخطاء أثناء إعادة التحميل السريع في بيئة التطوير.
if (!getApps().length) {
  try {
    initializeApp({
      credential: cert(serviceAccount)
    });
    console.log("Firebase Admin SDK initialized successfully.");
  } catch (error) {
    console.error("Error initializing Firebase Admin SDK:", error);
    // إيقاف التشغيل إذا فشلت تهيئة SDK
    throw new Error('Could not initialize Firebase Admin SDK. Please check your service account credentials.');
  }
}

// تصدير خدمات Firebase Admin المهيأة لاستخدامها في الواجهات البرمجية (API Routes)
const adminAuth = getAuth();
const adminDb = getFirestore();

export { adminAuth, adminDb };
