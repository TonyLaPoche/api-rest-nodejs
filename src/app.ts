import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { router as indexRouter } from './routes/index';
import { connectDB } from './config/db';
import { errorHandler } from './middleware/errorHandler';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);

(async () => {
    try {
      await connectDB();
      app.use(errorHandler);
      app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
      });
    } catch (error) {
      console.error("Database connection failed", error);
      process.exit(1);
    }
  })();