const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');

//post route
router.post('/', ( req, res ) => {

    // let feedback = req.body;
    let values = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments];

    console.log('values: ', values);

    console.log('Adding feedback: ', values);

    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, values)
        .then(result => {
            console.log('Added feedback: ', result);
            res.sendStatus(201);
        }) // end .then
        .catch(err => {
            console.log('Error sending feedback: ', err);
            res.sendStatus(500);
        }); // end .catch, end pool.query
});

module.exports = router;