const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT || 8080;

const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

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

app.get("/getPhones", (req, res) => {
  const getPhonesRef = db.ref("/phones");

  getPhonesRef.once(
    "value",
    (snapshot) => {
      console.log("Phone Data Success");
      res.status(200);
      res.send(snapshot.val());
    },
    (error) => {
      console.log("Phone Data Failure");
      res.status(500);
      res.send(error);
    }
  );
});

app.post("/deletePhone", (req, res) => {
  if (req.body) {
    if (req.body.id && req.body.id.length > 0) {
      const id = req.body.id;

      const phoneRef = db.ref(`/phones/${id}`);

      phoneRef.set(null, (error) => {
        if (error) {
          res.status(500);
          res.send("Error Deleting");
        } else {
          res.status(200);
          res.send("Phone Deleted");
        }
      });
    } else {
      res.status(400);
      res.send("ID Expected");
    }
  } else {
    res.status(400);
    res.send("No Data Supplied");
  }
});

app.post("/updatePhone", (req, res) => {
  if (req.body) {
    if (req.body.id && req.body.id.length > 0) {
      const phoneRef = db.ref(`/phones/${req.body.id}`);

      phoneRef.update(req.body, (error) => {
        if (error) {
          res.status(500);
          res.send("Error Updating");
        } else {
          res.status(200);
          res.send("Phone Updated");
        }
      });
    } else {
      res.status(400);
      res.send("ID Expected");
    }
  } else {
    res.status(400);
    res.send("No Data Supplied");
  }
});

app.post("/createPhone", (req, res) => {
  if (req.body) {
    const phoneRef = db.ref(`/phones/`);
    const newPhoneRef = phoneRef.push();
    const postId = newPhoneRef.key;

    req.body.id = postId;

    phoneRef.set(req.body, (error) => {
      if (error) {
        res.status(500);
        res.send("Error Creating");
      } else {
        res.status(200);
        res.send("Phone Created");
      }
    });
  } else {
    res.status(400);
    res.send("No Data Supplied");
  }
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

module.exports = app;
