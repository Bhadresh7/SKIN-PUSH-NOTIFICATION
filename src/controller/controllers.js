const admin = require("firebase-admin");
const db = admin.firestore();

const storeToken = async (req, res) => {
  const { userId, token } = req.body;

  console.log("Received userId:", userId);
  console.log("Received token:", token);

  if (!userId || !token) {
    return res
      .status(400)
      .json({ error: "Both userId and FCM token are required" });
  }

  try {
    const tokenDoc = {
      token,
      createdAt: new Date(),
    };

    // Ensure userId is a non-empty string
    await db.collection("fcmTokens").doc(userId).set(tokenDoc);

    res.status(201).json({ message: "Token stored successfully" });
  } catch (error) {
    console.error("Error storing token:", error);
    res.status(500).json({ error: "Failed to store token" });
  }
};

module.exports = {
  storeToken,
};
