export const getMinutesFromLastActiveTimestamp = (timestamp) => (new Date(+new Date() - timestamp).getMinutes());

export const formatTime = (sentAtTimestamp) => {
  const date = new Date(sentAtTimestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();
  return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
};

export const prepareMessages = (messagesData) => {
  return messagesData.map(conversationData => {
    const formattedTime = formatTime(conversationData.sentAt);
    return { sender: conversationData.sender.name, text: conversationData.text, formattedTime }
  });
};

export const scrollToBottom = (elementToBeScrolled) => {
  /* Added in setInterval in order to handle the case when the chat is loaded
  or the page is refreshed */
  setTimeout(() => {
    elementToBeScrolled.scrollTop = elementToBeScrolled.scrollHeight;
  });

};
