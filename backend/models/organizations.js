const Sequelize = require('sequelize');

const db = require('../db_connect.js');

const Organization = db.define('organization', {
  uid: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  accessToken: {
    type: Sequelize.STRING(10000),
    allowNull: false,
  },
  refreshToken: {
    type: Sequelize.STRING(10000),
    allowNull: false,
  },
  expire: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

// Organization.sync({force: true});

Organization.addReccord = () => {
    const id = new Date().getTime(); 
    const options = {
        uid: id,
        accessToken: id + '__token',
        refreshToken: id + '__refreshToken',
        expire: id.toString(), 
    }
    return Organization.create(options);
}

Organization.getReccords = async (req, res) => {
    const orgs = await Organization.findAll();
    res.send(orgs); 
}

module.exports = Organization;