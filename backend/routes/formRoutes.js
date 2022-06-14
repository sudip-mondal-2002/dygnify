const router = require('express').Router();

const tokenVerifier = require('../middlewares/tokenVerifier');
const formController = require('../controllers/formDataController');

router.get('/', tokenVerifier, formController.readAllForms);
router.post('/', formController.submitForm);

module.exports = router;