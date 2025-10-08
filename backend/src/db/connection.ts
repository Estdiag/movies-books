import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "movieandbooks_db",       
  "app_user",      
  "app_pass",       
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    logging: false,
  }
);
