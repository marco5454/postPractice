import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT | 5000;

const names = [
    {
      "name": "Marco",
      "age": 28,
      "talents": ["Programming", "Playing piano", "Loving mommy", "Good leader"],
      "job": ["Manager", "Phone Technician", "Driver"]
    },
    {
      "name": "Rachel",
      "age": 29,
      "talents": ["singing", "excellent mommy!", "Loving mommy", "Paper crafting"],
      "job": ["House Wife", "Businessman"]
    },
    {
      "name": "Ysa",
      "age": 6,
      "talents": ["singing", "dancing", "acting", "great speaker", "painter"],
      "job": ["Student"]
    },
    {
      "name": "Vayne",
      "age": 5,
      "talents": ["singing", "dancing", "drama", "eat all you can"],
      "job": ["student"]
    }
  ]
  

let data;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { phto: data });
});

app.post("/submit", (req, res) => {
  switch (req.body["choice"]) {
    case "marco":
      data = JSON.parse(names)[0];
      break;

    case "rachel":
      data = JSON.parse(names)[1];
      break;

    case "vayne":
      data = JSON.parse(names)[2];
      break;

    case "ysa":
      data = JSON.parse(names)[3];
      break;
  }
  res.redirect("/");
  console.log(names);
});

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});
