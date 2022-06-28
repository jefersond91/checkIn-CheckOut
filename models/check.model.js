const { db, DataTypes} = require('../utils/database.util');

//Model Check
const Check = db.define('check' , {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  entranceTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  exitTime: {
    type: DataTypes.DATE,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'working',
  },
});

module.exports = { Check };