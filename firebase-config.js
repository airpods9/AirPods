/* Firebase config for AirPods Sales Website
   Keep this file in the SAME folder as the HTML file.

   Firestore collections used by the website:
   - airpod_sales  : stores sales records
   - airpod_models : stores Category, Model AirPods, and import price
*/

window.AIRPODS_FIREBASE_CONFIG = {
  apiKey: "AIzaSyCqJ5s4wmn2BdE3zKv5Czk10wDnwRNCckc",
  authDomain: "airpod-sales.firebaseapp.com",
  projectId: "airpod-sales",
  storageBucket: "airpod-sales.firebasestorage.app",
  messagingSenderId: "615274481490",
  appId: "1:615274481490:web:a2abbdd11376e6a23d1c8b",
  measurementId: "G-V8FWY7K8E6"
};

window.AIRPODS_FIRESTORE_COLLECTION = "airpod_sales";
window.AIRPODS_PRODUCTS_COLLECTION = "airpod_models";
