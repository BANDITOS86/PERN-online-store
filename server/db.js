import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME, // Название базы данных
  process.env.DB_USER, // Пользователь под которым подключаемся
  process.env.DB_PASSWORD, // Пароль к БД
  {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);

export default sequelize;
