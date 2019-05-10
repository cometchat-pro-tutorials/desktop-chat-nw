import { CometChat } from "@cometchat-pro/chat";

require('dotenv').config();

const appID = process.env.REACT_APP_ID;
const apiKey = process.env.REACT_APP_API_KEY;
const UID = process.env.REACT_APP_UID;

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

export const loginChat = () => {
    return CometChat.login(UID, apiKey).then(
        user => {
            console.log("Login Successful:", { user });
        },
        error => {
            console.log("Login failed with exception:", { error });
        }
    );
};

export const sendChatMessage = message => {
    const receiverID = "SUPERHERO2";
    const messageText = message;
    const messageType = CometChat.MESSAGE_TYPE.TEXT;
    const receiverType = CometChat.RECEIVER_TYPE.USER;

    const textMessage = new CometChat.TextMessage(receiverID, messageText, messageType, receiverType);

    return CometChat.sendMessage(textMessage).then(
        message => {
            console.log("Message sent successfully:", message);
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
            console.log('user list received: ', userList);
        },
        error => {
            console.log("User list fetching failed with error: ", error);
        }
    );
};

export const fetchGroupsList = () => {
    const limit = 30;
    const groupsRequest = new CometChat.GroupsRequestBuilder().setLimit(limit).build();

    return groupsRequest.fetchNext().then(
        groupList => {
            /* groupList will be the list of Group class */
            console.log("Groups list fetched successfully", groupList);
            /* you can display the list of groups available using groupList */
        },
        error => {
            console.log("Groups list fetching failed with error", error);
        }
    );
};
