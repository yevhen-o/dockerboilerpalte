const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_SCHEMA || 'postgres',
                                process.env.PGUSER || 'postgres',
                                process.env.PGPASSWORD || '',
                                {
                                    host: process.env.PGHOST || 'localhost',
                                    port: process.env.PGPORT || 5432,
                                    dialect: 'postgres',
                                    dialectOptions: {
                                        ssl: process.env.DB_SSL == "true"
                                    }
                                });

module.exports = sequelize;