const db = require("../config/connections");
const { User, Post, Trip } = require("../models");
const tripSeeds = require("./tripSeeds.json");
const postSeeds = require("./postSeeds.json");
const userSeeds = require("./userSeeds.json");

db.once("open", async () => {
  try {
    await Post.deleteMany({});
    await Trip.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    await Trip.create(tripSeeds);

    for (let i = 0; i < postSeeds.length; i++) {
      const { _id, title } = await Post.create(postSeeds[i]);
      const user = await Trip.findOneAndUpdate(
        { tripname: title },
        {
          $addToSet: {
            posts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
