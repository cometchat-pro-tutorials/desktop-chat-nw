import { CometChat } from "@cometchat-pro/chat";
import store from '../store/configureStore';
import { MESSAGE_RECEIVED, receiveMessage } from '../actions';

const usersList = [
    {
        uid: "SUBZERO",
        name: "Sub-Zero",
        authToken: "123",
        avatar: "http://url-to-avatar",
        link: "http://url-to-profile",
        status: "online | offline",
        credits: 1000,
        email: 'sub-zero@mortalkombat.com',
        role: 'Cold Ninja',
        statusMessage: "I tire of maintaining our innocence.",
        lastActiveAt: 1557307930225
    },
    {
        uid: "SCORPION",
        name: "Scorpion",
        authToken: "123",
        avatar: "http://url-to-avatar",
        link: "http://url-to-profile",
        status: "online | offline",
        credits: 1000,
        email: 'scorpion@mortalkombat.com',
        role: 'Burning Ninja',
        statusMessage: "I will relieve you of your burden!",
        lastActiveAt: 1357307930225
    },
    {
        uid: "JOHNNYCAGE",
        name: "Johnny Cage",
        authToken: "123",
        avatar: "http://url-to-avatar",
        link: "http://url-to-profile",
        status: "online | offline",
        credits: 1000,
        email: 'johnnycage@mortalkombat.com',
        role: 'Law Enforcer',
        statusMessage: "An actor and a Shaolin walk into a bar.",
        lastActiveAt: 1547307930225
    },
    {
        uid: "SONYABLADE",
        name: "Sonya Blade",
        authToken: "123",
        avatar: "http://url-to-avatar",
        link: "http://url-to-profile",
        status: "online | offline",
        credits: 1000,
        email: 'sonyablade@mortalkombat.com',
        role: 'Military Bitch',
        statusMessage: "You're such an ass.",
        lastActiveAt: 1552307930225
    },
    {
        uid: "RAIDEN",
        name: "Raiden",
        authToken: "123",
        avatar: "http://url-to-avatar",
        link: "http://url-to-profile",
        status: "online | offline",
        credits: 1000,
        email: 'raiden@mortalkombat.com',
        role: 'Electrician',
        statusMessage: "Thunder blots out the sun.",
        lastActiveAt: 1547011919
    },
    {
        uid: "LIUKANG",
        name: "Liu Kang",
        authToken: "123",
        avatar: "http://url-to-avatar",
        link: "http://url-to-profile",
        status: "online | offline",
        credits: 1000,
        email: 'liukang@mortalkombat.com',
        role: 'Brus Lee Guy',
        statusMessage: "I have no patience for your humor.",
        lastActiveAt: 1567307930225
    }
];
const groupList = [
    {
        "guid": "mkgroup",
        "name": "Mortal Kombat Meeting",
        "type": "public",
        "description": "Meeting old buddies.",
        "createdAt": 1556696475,
        "updatedAt": 1543931333,
        "owner": "sub-zero",
        "hasJoined": true,
        "icon": "https://data.cometchat.com/assets/images/avatars/supergroup.png",
        "joinedAt:": 1556696476,
        "metadata": {
            "custom_key": "CUSTOM_INFORMATION"
        }
    }
];
const messages = [];
const singleMessage = {
    type: MESSAGE_RECEIVED,
    payload: {
        sender: {
            uid: 'superhero1',
            name: 'Sub-Zero',
            lastActiveAt: 1547011919
        },
        receiver: 'supergroup',
        type: 'text',
        receiverType: 'group',
        category: 'message',
        sentAt: 1547017662,
        text: 'Test message - received!'
    }
};

for (let i = 0; i < 10; i++) {
    const messageText = 'Test message' + i;
    messages.push({
        "sender": {
            "uid": "superhero1",
            "name": "Sub-Zero",
            "lastActiveAt": 1547011919
        },
        "receiver": "supergroup",
        "type": "text",
        "receiverType": "group",
        "category": "message",
        "sentAt": 1547017662,
        "text": messageText
    });
}

const getRandomElement = () => usersList[Math.floor(Math.random() * usersList.length)];

export const initChat = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
            console.log("Initialization completed successfully");
        }, 100);
    });
};

export const loginChat = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'superhero1' || username === 'superhero2' || username === 'superhero3' || username === 'superhero4' || username === 'superhero5') {
                resolve(getRandomElement());
            } else {
                reject('User not authenticated. Please use one of the already registered usernames, e.g. "superhero1"');
            }
        }, 100);
    });
};

export const sendChatMessage = message => {
    const receiverID = "mkgroup";
    const messageText = message;
    const messageType = CometChat.MESSAGE_TYPE.TEXT;
    const receiverType = CometChat.RECEIVER_TYPE.GROUP;

    const textMessage = new CometChat.TextMessage(receiverID, messageText, messageType, receiverType);
    textMessage.sentAt = new Date().getTime();
    textMessage.sender = { name: 'Iron Man' };

    return new Promise((resolve) => {
        setTimeout(() => {
            dispatchReceivedMessage();
            resolve(textMessage);
        }, 100);
    });
};

export const fetchUserList = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(usersList);
        }, 100);
    });
};

export const fetchGroupsList = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(groupList));
    }, 100);
};

export const fetchChatGroupConversations = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(messages));
    }, 100);
};

export const dispatchReceivedMessage = () => {
    setTimeout(() => {
        store.dispatch(receiveMessage(singleMessage));
    }, 1000);
};
