const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const URL = process.env.CONNECTIONSTRING;
const PORT = process.env.PORT;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connected to MongoDB successfully...");
    const app = require("./app");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
