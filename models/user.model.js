const Sequelize = require("sequelize");
const db = require("./database");

const User = db.define(
  "user",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    hooks: {
      beforeValidate: async user => {
        user.name = user.name[0].toUpperCase() + user.name.slice(1);
      }
    }
  }
);

// User.prototype.isPasswordValid = async password => {
//   return await bcrypt.compare(password, this.password);
// };

module.exports = User;
