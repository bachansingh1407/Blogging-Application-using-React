const express = require('express');
const cors = require('cors');
const path = require("path");
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoute');
const blogRoutes = require('./routes/blogRoute');
const userRoutes = require('./routes/userRoute')
const newsletterRoutes = require('./routes/newsletterRoute')
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes)
app.use('/api/user', userRoutes)
app.use("/api/newsletter", newsletterRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
