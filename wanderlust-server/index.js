const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const db = client.db("wanderlust");
    const destinationCollection = db.collection("destinations");
    const bookingCollection = db.collection("bookings");

    // bookingCollection
    app.post("/bookings", async (req, res) => {
      const bookingData = req.body;
      const result = await bookingCollection.insertOne(bookingData);
      res.send(result);
    });

    app.get("/bookings/:userId", async (req, res) => {
      const { userId } = req.params;
      const result = await bookingCollection.find({ userId }).toArray();
      res.send(result);
    });

    app.delete("/bookings/:id", async (req, res) => {
      const { id } = req.params;
      const result = await bookingCollection.deleteOne({
        _id: new ObjectId(id),
      });
      res.send(result);
    });

    // destinationCollections
    app.get("/destination", async (req, res) => {
      const result = await destinationCollection.find().toArray();
      res.send(result);
    });

    app.get("/destination/:id", async (req, res) => {
      const { id } = req.params;
      const result = await destinationCollection.findOne({
        _id: new ObjectId(id),
      });
      res.send(result);
    });

    app.delete("/destination/:id", async (req, res) => {
      const { id } = req.params;
      const result = await destinationCollection.deleteOne({
        _id: new ObjectId(id),
      });
      res.send(result);
    });

    app.patch("/destination/:id", async (req, res) => {
      const { id } = req.params;
      const updateData = req.body;
      const result = await destinationCollection.updateOne(
        {
          _id: new ObjectId(id),
        },
        { $set: updateData },
      );
      res.send(result);
    });

    app.post("/destination", async (req, res) => {
      const destinationData = req.body;
      const result = await destinationCollection.insertOne(destinationData);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello Wanderlust");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
