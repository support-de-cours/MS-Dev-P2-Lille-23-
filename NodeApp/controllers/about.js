"use strict";

const express = require('express');
const router = express.Router();

router.get("/about", (request, response, next) => {
    response.render('about');
});

module.exports = router;