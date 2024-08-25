const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const path = require('path');



const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
