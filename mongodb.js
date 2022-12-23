const { MongoClient, ObjectId } = require("mongodb");

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";
const client = new MongoClient(connectionUrl);

// const id = new ObjectId();
// console.log(id.id.length);
// console.log(id.toHexString().length);
// console.log(id.getTimestamp());

// MongoClient.connect(
//   connectionUrl,
//   { useNewUrlParser: true },
//   (errror, client) => {
//     if (errror) {
//       return console.log("Unable to connect to database");
//     }
//     const db = client.db(databaseName);

// db.collection("users").insertOne({
//   name: "Chaitanya",
//   age: 23,
// });

//     db.collection("users").insertMany(
//       [
//         { name: "Tarun", age: 19 },
//         { name: "Tanuj", age: 19 },
//       ],
//       (errror, response) => {
//         if (errror) {
//           return console.log("Unable to insert documents");
//         }
//         console.log(response.ops);
//       }
//     );
//   }
// );

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(databaseName);
  const collection = db.collection("tasks");

  //   await collection.insertOne({
  //     name: "Vikram",
  //     age: 26,
  //     _id: id,
  //   });

  //   const insertResult = await collection.insertMany([
  //     { description: "Meeting at 3:00", completed: true },
  //     { description: "Games Period", completed: true },
  //     { description: "Weekly syncup", completed: false },
  //   ]);
  //   console.log("Inserted documents =>", insertResult);

  //   const user = await collection.findOne({
  //     _id: ObjectId("63a012fb1f8973f1f77345ec"),
  //   });
  //   console.log(user);

  //   const user = await collection.find({ age: 19 }).toArray();
  //   console.log(...user);

  //   let task = await collection.findOne({
  //     _id: ObjectId("63a00dd7a091e696a0651392"),
  //   });
  //   console.log(task);

  //   task = await collection.find({ completed: false }).toArray();
  //   console.log(task);

  //   const updatedResult = await collection.updateOne(
  //     { _id: ObjectId("63a012fb1f8973f1f77345ec") },
  //     { $inc: { age: 20 } }
  //   );

  const updatedResult = await collection.updateMany(
    { completed: false },
    { $set: { completed: true } }
  );

  console.log(updatedResult);

  return updatedResult;
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
