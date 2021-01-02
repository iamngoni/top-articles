import * as express from "express";
import * as logger from "morgan";
import { fetchData } from ".";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(logger("dev"));

app.get("/v1/top", async function (req, res) {
  let data = await fetchData();
  return res.status(200).json(data);
});

app.get('*', function (req, res, next) {
  setImmediate(function () {
    return next(new Error('Route does not exist! Use /v1/top to receive top articles from Techzim.'));
  });
});

app.use(function (error: any, req: any, res: any, next: any) {
  res.status(404).json({
    message: error.message,
    status: 404
  });
  next();
});

app.listen(process.env.PORT || 8000, function () {
  console.log('API is up and running');
});