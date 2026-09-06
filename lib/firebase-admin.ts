import { cert, getApps, initializeApp, type App } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

// Lazily instantiated so importing this module never throws at build time
// (Next's "collect page data" step imports route handlers to inspect their
// exports, even for routes that only ever run at request time) — credential
// validation only happens on first real query.
let _app: App | undefined;
let _db: Firestore | undefined;

function getAdminApp(): App {
  if (!_app) {
    _app = getApps().length
      ? getApps()[0]!
      : initializeApp({
          credential: cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
          }),
        });
  }
  return _app;
}

export function getDb(): Firestore {
  if (!_db) _db = getFirestore(getAdminApp());
  return _db;
}
