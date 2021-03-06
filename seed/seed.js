"use strict";

const { User, UserLogin, db, House, Review } = require("../models");

const usersLogin = [
  // {
  //   email: "a@a.com",
  //   password: "a"
  // }
];
const users = [
  // {
  //   name: "a",
  //   lastName: "b",
  //   email: "a@a.com"
  // }
];

const houses = [
  {
    hostName: "anna",
    picture: "/img/houses/1.jpg",
    type: "Entire house",
    town: "Ostuni",
    superhost: true,
    title: "Beautiful flat in Ostuni!",
    price: 50.0,
    // rating: 4.93,
    // reviewsCount: 198,
    superhost: true,
    description:
      "Spend a unforgettable holiday in the enchanting surroundings of the town of Cisternino (reachable from the near airports of Bari and Brindisi).<br>Trullo Edera offers a heaven of peace and tranquillity, set in an elevated position with a stunning view.<br> It's the perfect place if you like nature. You can stay under an olive tree reading a good book, you can have a walk in the small country streets or go to the nearest beaches.<br> You can even easily visit any of the sights in Apulia such as the caves of Castellana, the trulli of Alberobello, the baroque cities of Lecce and Martina Franca, the excavations of Egnazia, the zoosafari of Fasano, Castel del Monte with Frederick's castle, Grottaglie famous for its ceramics, Taranto, Brindisi and Lecce museums.<br>    Prices vary on period and are to be considered included: in-outcoming cleanings, towels, sheets, water, gas, electricity.",
    guests: 4,
    bedrooms: 1,
    beds: 2,
    baths: 1,
    wifi: true,
    kitchen: true,
    heating: true,
    freeParking: true,
    entirePlace: true
  }
  // {
  //   picture: "/img/houses/2.jpg",
  //   type: "Entire house",
  //   town: "Isla Mujeres",
  //   title: "The World Famous Seashell House ~ Casa Caracol",
  //   price: "50.00",
  //   rating: 4.77,
  //   reviewsCount: 246,
  //   superhost: false
  // }
];
const reviews = [
  {
    user: "Radhika",
    date: "August 2019",
    avatar:
      "https://a0.muscache.com/im/users/34403074/profile_pic/1432859567/original.jpg?aki_policy=profile_x_medium",
    comment:
      "We had an excellent stay at the trullo - everything was perfect, starting with Anna’s generosity to meet us in town so we wouldn’t lose our way, to the beautiful setting of the trullo, to the fresh eggs and tomatoes for our use, to Anna’s tips and suggestions for local"
  }
];
const seed = async () => {
  await db.sync({ force: true });
  console.log("db synced");
  const user = await Promise.all(users.map(user => User.create(user)));
  const login = await Promise.all(usersLogin.map(log => UserLogin.create(log)));
  const house = await Promise.all(houses.map(house => House.create(house)));
  const review = await Promise.all(reviews.map(rev => Review.create(rev)));
  console.log(`seeded ${user.length}`);
  console.log(`seeded ${login.length}`);
  console.log("Seeded Succesfully");
};

const runSeed = async () => {
  try {
    await seed();
  } catch (error) {
    console.error(error);
  } finally {
    await db.close();
    console.log("db connection is closed");
  }
};

runSeed();

module.exports = seed;
