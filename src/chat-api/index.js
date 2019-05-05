import { CometChat } from "@cometchat-pro/chat";
require('dotenv').config();

const appID = process.env.APP_ID;
const apiKey = process.env.API_KEY;
const UID = process.env.UID;

export const initChat = () => {
  CometChat.init(appID).then(
    () => {
      console.log("Initialization completed successfully");
      // You can now call login function.
    },
    error => {
      console.log("Initialization failed with error:", error);
      // Check the reason for error and take appropriate action.
    }
  );
};

export const login = () => {
  CometChat.login(UID, apiKey).then(
    user => {
      console.log("Login Successful:", { user });
    },
    error => {
      console.log("Login failed with exception:", { error });
    }
  );
};


export const sendChatMessage = message => {
  const receiverID = "UID";
  const messageText = message;
  const messageType = CometChat.MESSAGE_TYPE.TEXT;
  const receiverType = CometChat.RECEIVER_TYPE.USER;

  const textMessage = new CometChat.TextMessage(receiverID, messageText, messageType, receiverType);

  CometChat.sendMessage(textMessage).then(
    message => {
      console.log("Message sent successfully:", message);
      // Text Message Sent Successfully
    },
    error => {
      console.log("Message sending failed with error:", error);
    }
  );

};
