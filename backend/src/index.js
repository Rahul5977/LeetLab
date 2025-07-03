import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send(`Hello welcome to LeetLab`);
});

app.use("/api/v1/auth",authRoutes)

app.listen(PORT, () => {
  console.log(`Server is runnig on port ${PORT} `);
});
