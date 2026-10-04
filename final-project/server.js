const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors()); 

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/enrollments', require('./routes/enrollmentRoutes'));
app.use('/api/reviews', require('./routes/reviewRoutes'));

mongoose.connect(process.env.MONGO_URI).then(() => console.log('DB Connected'));
app.listen(process.env.PORT, () => console.log('Server on port', process.env.PORT));