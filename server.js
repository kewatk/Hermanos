const express = require("express");
const cors = require("cors");
const app = express();
const inquiryRoutes = require("./routes/inquiryRoutes");

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", inquiryRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3306");
});
