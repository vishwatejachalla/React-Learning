import {Router, Request, Response} from 'express';
import {body, validationResult} from 'express-validator';
import bcrypt from 'bcryptjs';

const userRouter: Router = Router();

/*
    @usage : register a user
    @url : http://localhost:9000/users/register
    @method : POST
    @form-params : name , email , password
    @url-params : no-params
 */
userRouter.post('/register', [
    body("name").isLength({min: 5, max: 10}).withMessage("Name should be min 5 chars"),
    body("password").isStrongPassword().withMessage("Required a Strong password"),
    body("email").isEmail().withMessage("Required a proper Email"),
], async (request: Request, response: Response) => {

    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(401).json({
            errors: errors.array()
        });
    }

    try {
        let {name, email, password} = request.body;

        // encrypt the password
        let salt = await bcrypt.genSalt(10);
        let hashPassword = await bcrypt.hash(password, salt);

        // comparison
        let isMatch = await bcrypt.compare("Naveen@123", hashPassword);
        if (isMatch) {
            console.log('Login is success');
        } else {
            console.log('Invalid credentials');
        }

        response.status(200).json({
            msg: 'Registration is success',
            formObj: {name, email, password},
            hashPassword: hashPassword
        });
    } catch (error) {
        return response.status(500).json({
            error: error
        })
    }


});

export default userRouter;