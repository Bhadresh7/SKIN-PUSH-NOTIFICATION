const { db, admin } = require("../constants/firebaseinit");

//fetch tokens from the firebase
const fetchTokens = async () => {
  try {
    console.log("hasjdflksajlkfjsadklfjkls");
    const snapshot = await db.collection("tokens").get();

    if (snapshot.empty) {
      console.log("No matching documents.");
      return [];
    }

    const tokens = [];
    snapshot.forEach((doc) => {
      tokens.push(doc.data().token);
    });

    console.log(tokens);

    return tokens;
  } catch (error) {
    console.log(error);
  }
};

//send notification to the users
async function sendNotificationToUser(title, body, tokens) {
  try {
    console.log(tokens);
    console.log("=------------------------------------");
    const response = await Promise.all(
      tokens.map((token) =>
        admin.messaging().send({
          notification: {
            title: title,
            body: body,
          },

          android: {
            notification: {
              icon: "ic_notification",
            },
          },

          token,
        })
      )
    );

    return response;
  } catch (error) {
    console.error("Error sending message:", error);
  }
}

module.exports = { fetchTokens, sendNotificationToUser };
