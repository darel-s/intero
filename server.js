const express = require("express");
const app = express();
const userRoutes = require("./routes/user");

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
