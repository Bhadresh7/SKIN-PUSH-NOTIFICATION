const serviceAccount = require("../../serviceAccount.json");
const admin = require("firebase-admin");

const firebaseInit = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
});

const db = admin.firestore();

module.exports = { firebaseInit, db, admin };
