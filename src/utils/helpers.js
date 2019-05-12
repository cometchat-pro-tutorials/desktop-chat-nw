export const getMinutesFromLastActiveTimestamp = (timestamp) => (new Date(+ new Date() - timestamp).getMinutes());

export const formatTime = (sentAtTimestamp) => {
  const date = new Date(sentAtTimestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();
  return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
};
