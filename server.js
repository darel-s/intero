const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/user");
const parentRoutes = require("./routes/parent");
const puskesmasRoutes = require("./routes/puskesmas");
const babyRoutes = require("./routes/babies");
const babyHistoryRoutes = require("./routes/babyHistory");

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api", parentRoutes);
app.use("/api", puskesmasRoutes);
app.use("/api", babyRoutes);
app.use("/api", babyHistoryRoutes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
