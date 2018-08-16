var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Test Data
var testData = {
	message: "Welcome to the API."
}

// Get for api homepage
router.get('/', function(req, res) {
	res.status(200).send(testData);
});


module.exports = router;
