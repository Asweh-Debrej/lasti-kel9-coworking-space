const mongoose = require('mongoose');
require('dotenv').config();

const db_port = process.env.MONGO_PORT;
const db_host = process.env.MONGO_HOST || "localhost";
const db_user = process.env.MONGO_USER;
const db_password = process.env.MONGO_PASSWORD;
const db_database = process.env.MONGO_DATABASE;
const conn = `mongodb://${db_user}:${db_password}@${db_host}:${db_port}/${db_database}?authSource=admin`;

module.exports = () =>{
	mongoose.connect(conn);
}
