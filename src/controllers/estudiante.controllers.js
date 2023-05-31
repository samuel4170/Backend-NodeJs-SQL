import { Express } from "express";

const app = Express();

app.get("/", (req, res) => {
  res.send("Home");
});


app.post("/", (req, res 
  ) => {
    res.send("Post");
  });


app.put("/", (req,  res) => {   res });


app.delete("/", (req, res) => {   res });       