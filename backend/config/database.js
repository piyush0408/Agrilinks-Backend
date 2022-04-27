const mongoose = require("mongoose");
// const { options } = require('../routes/productRoute');

const connectDatabase = () => {
  mongoose
    .connect(
      process.env.DB
      // {useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}
    )
    .then((data) => {
      console.log(`Mongodb connected with server ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

// mongoose.connect()
module.exports = connectDatabase;
