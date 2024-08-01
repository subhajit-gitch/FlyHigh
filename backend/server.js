const { MongoClient } = require('mongodb');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'flyhigh';

const PORT=8080;

app.use(bodyParser.json());
app.use(cors())

app.post('/register', async (req, res) => {
    const {fullName,email, password} = req.body;
    await app.dbConnection.collection('users').insertMany([{fullName, email, password}]);
    // console.log(username, password);
    return res.send({status: 201});
});

app.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const user = await app.dbConnection.collection('users').find({email, password}).toArray();
    if (user.length == 0) {
        return res.send({status: 401, message: 'Invalid email/Password'});
    }
    await app.dbConnection.collection('users').updateOne({email}, {$set: {active: true}});
    return res.send({ status: 200, message: 'Successfully logged in' , user});
}); 

app.post('/logout', async (req, res) => {
    const {username} = req.body;
    await app.dbConnection.collection('users').updateOne({username}, {$set: {active: false}});
    return res.send({ status: 200, message: 'Successfully logged out'});
});

app.post('/checkin', async (req, res) => {
    const {pnr,  email} = req.body;
    const users = await app.dbConnection.collection('users').find({email}).toArray();
    if (users.length == 0 || users[0].active != true) {
        return res.send({status: 401, message: 'Please log in first'});
    }
    await app.dbConnection.collection('checkins').insertMany([{email, pnr}]);
    const message = `Checked in for pnr- ${pnr} for user- ${email}`;
    return res.send({status: 201, message})
})

app.post('/destinations', async (req, res) => {
    const { fromAirport, toAirport, travellerCount, classType, selectedDate, email } = req.body;
    const users = await app.dbConnection.collection('users').find({ email }).toArray();
    if (users.length === 0 || !users[0].active) {
      return res.send({ status: 401, message: 'Please log in first' });
    }
    await app.dbConnection.collection('destinations').insertMany([{ fromAirport, toAirport, travellerCount, classType, selectedDate }]);
    const message = `Your ${fromAirport} ticket booked successfully to ${toAirport}`;
    return res.send({ status: 201, message });
  });

app.listen(PORT, async () => {
    console.log('came here');
    await client.connect();
    app.dbConnection = client.db(dbName);
    console.log(`server listening on ${PORT}`);
})
