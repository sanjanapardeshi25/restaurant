const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const port = 3000;



const mongoURI = 'mongodb://localhost:27017/restaurant';

async function connectToMongo() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected to MongoDB');

    // Call your function to perform operations here
    performDatabaseOperations();

  } catch (error) {
    console.error('MongoDB connection error:', error);
  } finally {
    // Close the MongoDB connection when done (optional)
    // mongoose.connection.close();
  }
}

/*

function performDatabaseOperations() {
  const userSchema = new mongoose.Schema({
    name: String,
    Item1: String,
    Item2: String
  });

  const UserModel = mongoose.model('User', userSchema);

  const uDocument = new UserModel({ name: 'John Doe', Item1: 'Gulab Jamun', Item2: 'Rasmalai' });

  uDocument.save()
    .then(savedDocument => {
      console.log('Saved Document:', savedDocument);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      // Close the MongoDB connection when done (optional)
      mongoose.connection.close();
    });
}

// Call the function to connect and perform operations
connectToMongo();
*/


const publicPath = path.join(__dirname, 'public');
const mainRoute = require('./routes/mainRoute');

app.use(express.static(publicPath));

app.use('/', mainRoute);
app.use('/vegetarian', mainRoute);
app.use('/seafood', mainRoute);
app.use('/italian', mainRoute);
app.use('/dessert', mainRoute);
app.use('/south', mainRoute);
app.use('/non-veg', mainRoute);
app.use('/mexican', mainRoute);
app.use('/sweet', mainRoute);
app.use('/billing', mainRoute);
app.use('/home', mainRoute);

/*
('/', (req, res) => {
  res.sendFile(path.join(__dirname, htmlPath));
});

app.get('/vegetarian', (req, res) => {
  res.sendFile(path.join(__dirname, vegPath));
});
*/


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

