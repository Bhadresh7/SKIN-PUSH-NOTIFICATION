const serviceAccount = require("../../serviceAccountKey.json");
const admin = require("firebase-admin");

const firebaseInit = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
});

module.exports = firebaseInit;
