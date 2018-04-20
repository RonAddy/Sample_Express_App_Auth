const authRouter = express.Router();
const AuthServices = require('../auth/AuthServices');


authRouter.get('/auth/login', AuthServices.login)