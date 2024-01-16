const router = require('express').Router();
const { UserLogin , UserRegister , AddProgram , GetUserDetails, UpdateProgram , DeleteProgram} = require('../Controllers/userController');
const  authMiddleware  = require('../Middleware/authMiddleware');

//register new user
router.post('/register',UserRegister);

//login of user
router.post('/login',UserLogin);

//get-all
router.get('/get-all-user-programs',authMiddleware,GetUserDetails);

//add new program
router.post('/add-program',authMiddleware,AddProgram);

//update-program
router.post('/update-program',UpdateProgram);

//delete program
router.post('/delete-program',DeleteProgram);

module.exports = router;