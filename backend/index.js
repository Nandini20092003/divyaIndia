import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js";
import heritageSiteRoute from "./routes/heritageSites.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: ['https://divyaindia.onrender.com', 'http://localhost:3000'], // Update with your frontend's URL
  credentials: true,
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

// Resolve __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, "../frontend/build")));

// Database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database connected");
  } catch (err) {
    console.log("MongoDB database connection failed", err);
  }
};

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);
app.use("/api/v1/heritageSites", heritageSiteRoute);

// Catch-all handler for any request that doesn't match the above routes
app.get("*", function (req, res) {
  res.sendFile(join(__dirname, "../frontend/build/index.html"));
});

// Start server
app.listen(port, () => {
  connect();
  console.log("Server is running on port", port);
});


// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import mongoose from "mongoose";
// import cookieParser from "cookie-parser";
// import { fileURLToPath } from "url";
// import { dirname, join } from "path";
// import tourRoute from "./routes/tours.js";
// import userRoute from "./routes/users.js";
// import authRoute from "./routes/auth.js";
// import reviewRoute from "./routes/reviews.js";
// import bookingRoute from "./routes/bookings.js";
// import heritageSiteRoute from "./routes/heritageSites.js";

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 8000;
// const corsOptions = {
//   origin: true,
//   credentials: true,
// };


// // Middleware
// app.use(express.json());
// app.use(cors(corsOptions));
// app.use(cookieParser());

// // Resolve __dirname equivalent
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// app.use(express.static(join(__dirname, "../frontend/build")));

// // Database connection
// mongoose.set("strictQuery", false);
// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB database connected");
//   } catch (err) {
//     console.log("MongoDB database connection failed", err);
//   }
// };

// // Routes
// app.use("/api/v1/auth", authRoute);
// app.use("/api/v1/tours", tourRoute);
// app.use("/api/v1/users", userRoute);
// app.use("/api/v1/review", reviewRoute);
// app.use("/api/v1/booking", bookingRoute);
// app.use("/api/v1/heritageSites", heritageSiteRoute);

// // Catch-all handler for any request that doesn't match the above routes
// app.get("*", function (req, res) {
//   res.sendFile(join(__dirname, "../frontend/build/index.html"));
// });

// // Start server
// app.listen(port, () => {
//   connect();
//   console.log("Server is running on port", port);
// });
