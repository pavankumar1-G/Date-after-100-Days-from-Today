const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  const date = new Date();
  const addedDaysInDate = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100
  );
  response.send(
    `${addedDaysInDate.getDate()}/${
      addedDaysInDate.getMonth() + 1
    }/${addedDaysInDate.getFullYear()}`
  );
});

module.exports = app;
