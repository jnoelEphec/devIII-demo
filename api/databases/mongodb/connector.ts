const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb://root:example@localhost:27017/mydatabase",
      {
        authSource: "admin",
      }
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`);
    setTimeout(connectDatabase, 2000); // Réessayer après 2 secondes en cas d'échec
  }
};

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to DB.");
});

mongoose.connection.on("error", (error: any) => {
  console.log(`Mongoose connection error: ${error}`);
  mongoose.disconnect();
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected from DB.");
  setTimeout(connectDatabase, 2000); // Réessayer après 2 secondes en cas de déconnexion
});

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("Mongoose disconnected due to app termination.");
    process.exit(0);
  });
});

export default connectDatabase;