const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51KmFgtSIz2e7Mgp56YP75as7NcAAQaIYv4wBCjzkW6N2pHbWtEnNZ7xX3KI4pElJJMxrP0VtBWRZo6KaBFgYnIVN00INlAQc33');

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (req, res) => res.status(200).send("Hello world"));

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment request received...total: ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of currency
        currency: "usd"
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
})

// Listen cmd
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-9c1f4/us-central1/api