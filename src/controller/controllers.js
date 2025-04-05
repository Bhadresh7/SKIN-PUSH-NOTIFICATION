const admin = require("firebase-admin");
const {
  fetchTokens,
  sendNotificationToUser,
} = require("../helpers/notificationHelper");

const sendNotification = async (req, res) => {
  try {
    let { title, content } = req.body;
    console.log(title, content);
    let tokens = await fetchTokens();
    console.log(tokens);
    let result = await sendNotificationToUser(title, content, tokens);
    console.log("sucessfully send the messages...");
    res.status(200).send({ sucess: true });
  } catch (error) {
    console.log(error);
    res.json({ error });  
  }
};

module.exports = {
  sendNotification,
};
