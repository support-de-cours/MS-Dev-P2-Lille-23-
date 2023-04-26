"use strict";

const express = require('express');
const router = express.Router();

router.get("/", (request, response, next) => {
    response.render('homepage', {
        myVar: "AZERTYUIO"
    });
});

module.exports = router;