import "dotenv/config"


export default ({ config}) => ({
...config,
extra: {

  firebaseApiKey: process.env.FIREBASE_API_KEY,
  firebaseauthDomain: process.env.FIREBASE_AUTH_DOMAIN,
  firebaseprojectId: process.env.FIREBASE_PROJECT_ID,
  firebasestorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  firebasemessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  firebaseappId: process.env.FIREBASE_APP_ID,
  firebasemeasurementId: process.env.FIREBASE_MEASUREMENT_ID,

},


});