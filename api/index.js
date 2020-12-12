const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 8080;

const admin = require("firebase-admin");

const serviceAccount = require("./config/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://danthompsonphonecatalog-default-rtdb.europe-west1.firebasedatabase.app",
});

const db = admin.database();

app.get("/", (req, res) => {
  console.log(`Root access`);
  res.send("API Online");
});

app.get("/phones", (req, res) => {
  const phonesRef = db.ref("/phones");

  phonesRef.once(
    "value",
    (snapshot) => {
      console.log("Phone Data Success");
      res.send(snapshot.val());
    },
    (error) => {
      console.log("Phone Data Failure");
      res.send(error);
    }
  );
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
