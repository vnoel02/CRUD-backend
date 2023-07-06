const express = require("express");
const router = express.Router();


app.get("/", (req,res) => {
    res.send(`
      <div>
        <h1> Welcome to Victor's CRUD-backend</h1>
      </div>
      `
    )
  })

module.exports = router;