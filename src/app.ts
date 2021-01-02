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

app.listen(process.env.PORT || 8000, function () {
  console.log('API is up and running');
});