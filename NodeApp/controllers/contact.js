"use strict";

const express = require('express');
const router = express.Router();

router.get("/contact", (request, response, next) => {
    response.render('contact');
});

module.exports = router;