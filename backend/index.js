require("dotenv").config();

const db = require("./config");

const app = require("./src/app");

const port = parseInt(process.env.APP_PORT ?? "5000", 10);

db.connect((err) => {
  if (err) {
    // eslint-disable-next-line no-restricted-syntax
    console.log(err);
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log("Connected to database");
  }
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});
