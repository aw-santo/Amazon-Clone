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
    // const { name } = req.body;
    console.log('Payment request received...total: ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        description: 'Software development services',
        shipping: {
          name: 'Lorem Ipsum',
          address: {
            line1: '510 Townsend St',
            postal_code: '98140',
            city: 'San Francisco',
            state: 'CA',
            country: 'US',
          },
        },
        amount: total,
        currency: 'usd',
        payment_method_types: ['card'], 
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
})

// Listen cmd
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-9c1f4/us-central1/api