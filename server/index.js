require('dotenv').config();
const appID = process.env.APP_ID;
const apiKey = process.env.API_KEY;
const UID = process.env.UID;

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


CometChat.login(UID, apiKey).then(
  user => {
    console.log("Login Successful:", { user });
  },
  error => {
    console.log("Login failed with exception:", { error });
  }
);
