import { CometChat } from "@cometchat-pro/chat";

const mockedData = [
    {name: 'Sub-Zero', role: 'Cold Ninja'},
    {name: 'Scorpion', role: 'Hot Ninja'},
    {name: 'Johnny Cage', role: 'Law Enforcer'},
    {name: 'Sonya', role: 'Military Bitch'},
    {name: 'Raiden', role: 'Electricity Guy'},
    {name: 'Liu Kang', role: 'Brus Lee Guy'},
    {name: 'Goro', role: 'Multitasking Guy'},
    {name: 'Erron Black', role: 'Cowboy Guy'},
    {name: 'Predator', role: 'Animal'}
];

function getRandomElement() {
    return mockedData[Math.floor(Math.random() * mockedData.length)];
}

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
