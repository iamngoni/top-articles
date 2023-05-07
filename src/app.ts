import * as express from "express";
import * as logger from "morgan";
import * as cors from "cors";
import { healthCheckHandler, notFoundHandler, topArticles } from "./routes";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(cors());

app.use("/api/1.0/articles", topArticles)

app.use("/health-check", healthCheckHandler);
app.use(notFoundHandler);

app.listen(process.env.PORT || 8000, function () {
  console.log('API is up and running');
});