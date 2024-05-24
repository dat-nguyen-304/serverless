const mongoose = require("mongoose");

const connectString = `mongodb+srv://dathdws:122711@cluster-hdws.05nxugs.mongodb.net/`;

class Database {
  static instance;

  constructor() {
    this.connect();
  }

  connect() {
    // mongoose.set('debug', true);
    // mongoose.set('debug', { color: true });
    mongoose
      .connect(connectString)
      .then(() =>
        console.log(
          `Connected to MongoDB ${username} successfully`,
          mongoose.connections.length
        )
      )
      .catch((err) => console.error("Error", err));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const mongoDbInstance = Database.getInstance();

module.exports = mongoDbInstance;
