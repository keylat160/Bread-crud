const express = require('express');
const router = express.Router();
const Bread = require('../models/bread');
const render = require('../render');

//list Route
router.get('/', (req, res) => {
    //res.send(Bread);
    res.send(render('Index', { breads: Bread }));
});

//New Route
router.get('/new', (req, res) => {
    // res.render('New');
    res.send(render('New'));
});

//Detail Route
router.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
        res.send(render('Show', { bread: Bread[req.params.arrayIndex] }));
    } else {
        res.status(404).send('404. Page not found.');
        res.status(404).send('404. Bread not found.');
    //res.send(Bread[req.params.arrayIndex]);
    }
});

// Create Route
router.post('/', (req, res) => {
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true;
    } else {
        req.body.hasGluten = false;
    }
    Bread.push(req.body);
    res.redirect('/breads');
});
module.exports = router;