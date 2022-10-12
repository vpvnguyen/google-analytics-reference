# google-analytics-reference

## Web version 9

Doc: https://firebase.google.com/docs/analytics/get-started?platform=web#web-version-9

- Create and initialize Firebase
- NPM install Firebase ``npm install firebase`
- NPM install dev tools: `npm install -g firebase-tools`

- Add the Analytics SDK to your app

```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "HASH-HASH",
  authDomain: "analytics-test-HASH.firebaseapp.com",
  projectId: "analytics-test-HASH",
  storageBucket: "analytics-test-HASH.appspot.com",
  messagingSenderId: "HASH",
  appId: "1:HASH:web:HASH",
  measurementId: "G-HASH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

- Deploy to firebase hosting

```zsh
firebase login
firebase init
firebase deploy
```

- Configure event and embed gtag

```html
<!-- Google tag (gtag.js) -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-VP1QPXRLXH"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-VP1QPXRLXH");
</script>
```
