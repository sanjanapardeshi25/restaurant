
const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/views/home.html'));
});

router.get('/vegetarian', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/views/vegetarian.html'));
});

router.get('/seafood', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/views/seafood.html'));
});

router.get('/italian', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/views/italian.html'));
});

router.get('/dessert', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/views/dessert.html'));
});

router.get('/south', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/views/south.html'));
});

router.get('/non-veg', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/views/non-veg.html'));
});

router.get('/mexican', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/views/mexican.html'));
});

router.get('/sweet', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/views/sweet.html'));
});

router.get('/billing', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/views/billing.html'));
});

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/views/home.html'));
});


module.exports = router;
