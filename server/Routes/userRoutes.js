const router = require('express').Router();
const { UserLogin , UserRegister , AddProgram } = require('../Controllers/userController');

//register new user
router.post('/register',UserRegister);

//login of user
router.post('/login',UserLogin);

//add new program
router.post('/add-program',AddProgram);
module.exports = router;