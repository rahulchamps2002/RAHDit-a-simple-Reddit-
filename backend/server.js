const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('your_mongodb_connection_string', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/subRAHdits', require('./routes/subRAHdits'));  // Ensure this line is correct
app.use('/api/posts', require('./routes/posts'));
app.use('/api/comments', require('./routes/comments'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));



