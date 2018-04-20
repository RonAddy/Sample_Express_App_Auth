const authRouter = expres.Router();
const AuthServices = require('../auth/AuthServices');


authRouter.get('/auth/login', AuthServices.login)