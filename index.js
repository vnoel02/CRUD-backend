const express = require("express");
const db = require("./db");
const PORT = "4000"; //Port number
const cors = require("cors")

const app = express(); // instance to express module


app.use(cors());
app.use(express.json())


app.use("/api", require("./api")); //Mounting api for routing via express

// Potential sync, place db.sync({force: true }) to nuke data
const syncDB = () => db.sync();

app.get("/", (req,res) => {
  res.send(
    `<h1> Welcome to Victor's CRUD-backend </h1> 
        <h2> To see campus data ==> url/api/campuses </h2>
        <h2> To see student data ==> url/api/students</h2>
    `
  )
});

const runServer = () => {
  app.listen(PORT, () => {
    console.log(`Live on port: ${PORT}`);
  });
};

syncDB();
runServer();

module.exports = app;