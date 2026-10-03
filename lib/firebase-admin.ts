import { cert, getApps, initializeApp, type App } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import type { Bucket } from "@google-cloud/storage";

// Lazily instantiated so importing this module never throws at build time
// (Next's "collect page data" step imports route handlers to inspect their
// exports, even for routes that only ever run at request time) — credential
// validation only happens on first real query.
let _app: App | undefined;
let _db: Firestore | undefined;
let _bucket: Bucket | undefined;

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
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        });
  }
  return _app;
}

export function getDb(): Firestore {
  if (!_db) _db = getFirestore(getAdminApp());
  return _db;
}

// Used only by the note-taker's recording upload — everything else in this
// admin is Firestore-only. Same bucket fta_podcast_generator's Python
// service publishes generated episodes/transcripts to.
export function getBucket(): Bucket {
  if (!_bucket) _bucket = getStorage(getAdminApp()).bucket();
  return _bucket;
}
