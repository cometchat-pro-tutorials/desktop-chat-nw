import { CometChat } from "@cometchat-pro/chat";

require('dotenv').config();

const appID = process.env.REACT_APP_ID;
const apiKey = process.env.REACT_APP_API_KEY;

export const initChat = () => {
  return CometChat.init(appID).then(
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

export const loginChat = (username) => {
  return CometChat.login(username, apiKey).then(
    user => {
      attachReceivedMessageListener();
      return user;
    },
    error => {
      console.log("Login failed with exception:", { error });
    }
  );
};

const attachReceivedMessageListener = () => {
  const listenerID = "supergroup";

  CometChat.addMessageListener(
    listenerID,
    new CometChat.MessageListener({
      onTextMessageReceived: textMessage => {
        console.log("Text message received successfully", textMessage);
        // Handle text message
      },
      onMediaMessageReceived: mediaMessage => {
        console.log("Media message received successfully", mediaMessage);
        // Handle media message
      },
      onCutomMessageReceived: customMessage => {
        console.log("Custom message received successfully", customMessage);
        // Handle custom message
      }

    })
  );

};

export const sendChatMessage = message => {
  const receiverID = "supergroup";
  const messageText = message;
  const messageType = CometChat.MESSAGE_TYPE.TEXT;
  const receiverType = CometChat.RECEIVER_TYPE.GROUP;

  const textMessage = new CometChat.TextMessage(receiverID, messageText, messageType, receiverType);

  return CometChat.sendMessage(textMessage).then(
    message => {
      console.log("Message sent successfully:", message);
      return message;
    },
    error => {
      console.log("Message sending failed with error:", error);
    }
  );

};

export const fetchUserList = () => {
  const limit = 30;
  const userRequest = new CometChat.UsersRequestBuilder().setLimit(limit).build();

  return userRequest.fetchNext().then(
    userList => {
      return userList;
    },
    error => {
      console.log("User list fetching failed with error: ", error);
    }
  );
};

export const fetchChatGroupConversations = () => {
  const GUID = "supergroup";
  const limit = 30;

  const messageRequest = new CometChat.MessagesRequestBuilder().setGUID(GUID).setLimit(limit).build();

  return messageRequest.fetchPrevious().then(
    messages => {
      return messages;
    },
    error => {
      console.log("Message fetching failed with error: ", error);
    }
  );
};
