import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Testing Testing Watuhub" });
});

app.listen(5000, () => console.log("Backend listening on port 5000"));
