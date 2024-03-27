import "dotenv/config";
import express from "express";
import sequelize from "./db.js";
import models from "./models/models.js";
import cors from "cors";
import fileUpload from 'express-fileupload';
import router from "./routes/index.js";
import errorHandler from "./middleware/ErrorHandlingMidleware.js";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);

// Обработка ошибок, middleware должен быть последним
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate(); // Подключение к БД
    await sequelize.sync(); // Синхронизация БД со схемой

    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

start();