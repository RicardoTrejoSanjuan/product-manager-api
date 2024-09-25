import { Sequelize } from "sequelize-typescript";
import { getEnvironment } from "./config";
import Product from "../models/Product.model";

// Passing a connection URI
const db = new Sequelize(getEnvironment('DATABASE_URL'), {
    models: [Product]
});

export default db;