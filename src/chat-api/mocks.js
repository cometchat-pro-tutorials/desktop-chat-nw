import { CometChat } from "@cometchat-pro/chat";

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
    },
    {
        uid: "GORO",
        name: "Goro",
        authToken: "123",
        avatar: "http://url-to-avatar",
        link: "http://url-to-profile",
        status: "online | offline",
        credits: 1000,
        email: 'goro@mortalkombat.com',
        role: 'Multitasking Guy',
        statusMessage: "Here is what you are owed.",
        lastActiveAt: 1568307930225
    },
    {
        uid: "ERRONBLACK",
        name: "Erron Black",
        authToken: "123",
        avatar: "http://url-to-avatar",
        link: "http://url-to-profile",
        status: "online | offline",
        credits: 1000,
        email: 'erronbalck@mortalkombat.com',
        role: 'Cawboy',
        statusMessage: "He offered more coins.",
        lastActiveAt: 1569907930225
    },
    {
        uid: "KITANA",
        name: "Kitana",
        authToken: "123",
        avatar: "http://url-to-avatar",
        link: "http://url-to-profile",
        status: "online | offline",
        credits: 1000,
        email: 'kitana@mortalkombat.com',
        role: 'Nasty Bitch',
        statusMessage: "I know of many.",
        lastActiveAt: 1569007930225
    }
];

const getRandomElement = () => usersList[Math.floor(Math.random() * usersList.length)];

export const initChat = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log("Initialization completed successfully");
        }, 100);
    });
};

export const loginChat = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(getRandomElement());
        }, 100);
    });
};


export const sendChatMessage = message => {
    const receiverID = getRandomElement().name;
    const messageText = message;
    const messageType = CometChat.MESSAGE_TYPE.TEXT;
    const receiverType = CometChat.RECEIVER_TYPE.USER;

    const textMessage = new CometChat.TextMessage(receiverID, messageText, messageType, receiverType);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(textMessage);
        }, 100);
    });

};

export const fetchUserList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(usersList);
        });
    });
    /*const limit = 30;
    const userRequest = new CometChat.UsersRequestBuilder().setLimit(limit).build();

    userRequest.fetchNext().then(
        userList => {
            console.log('user list received: ', userList);
        },
        error => {
            console.log("User list fetching failed with error: ", error);
        }
    );*/
};