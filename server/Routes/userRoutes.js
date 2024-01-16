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
router.post('/add-new-program',authMiddleware,AddProgram);

//update-program
router.post('/update-program',authMiddleware,UpdateProgram);

//delete program
router.post('/delete-program',authMiddleware,DeleteProgram);

module.exports = router;