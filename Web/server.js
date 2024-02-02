const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Use bodyParser middleware to parse JSON data
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Define the endpoint for prediction
app.post('/prediction', (req, res) => {
  // Process the received JSON data
  const values = req.body.values;

  // Replace this with your actual prediction logic
  const predictionResult = `Predicted result for values: ${values.join(', ')}`;

  // Send the prediction result as JSON response
  res.json({ prediction: predictionResult });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
