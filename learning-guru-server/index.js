const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
// app.use("/assets", express.static("/assets"));
const courses = require("./data/courses.json");

/* apps for creating own links; where to redirect the data */
app.get("/", (req, res) => {
  res.send(`Learning platform server is running, on port: ${port}`);
});
app.get("/courses", (req, res) => {
  res.send(courses);
});  
app.get("/course/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id)
  const course = courses.find((crs) => crs.id === id);
  console.log("Course id: ", id);
  res.send(course);
});

/* app port for listening  */
app.listen(port, () => {
  console.log(`Learning platform running on port: ${port}`);
});
