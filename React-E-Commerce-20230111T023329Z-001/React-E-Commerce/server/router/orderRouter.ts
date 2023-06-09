import {Router, Request, Response} from 'express';
import {body} from 'express-validator';
import {tokenVerifier} from "../middleware/tokenVerifier";
import {validateForm} from "../middleware/validateForm";
import * as orderController from "../controller/orderController";

const orderRouter: Router = Router();

/**
 * @usage : place an order
 * @url : http://localhost:9000/api/orders/place
 * @params : products[{product, count,price}],total,tax,grandTotal,paymentType
 * @method : POST
 * @access : PRIVATE
 */
orderRouter.post('/place', [
    body('products').not().isEmpty().withMessage('products is required'),
    body('total').not().isEmpty().withMessage('total is required'),
    body('tax').not().isEmpty().withMessage('tax is required'),
    body('grandTotal').not().isEmpty().withMessage('grandTotal is required'),
    body('paymentType').not().isEmpty().withMessage('paymentType is required')
], tokenVerifier, validateForm, async (request: Request, response: Response) => {
    await orderController.placeOrder(request, response);
})


/**
 * @usage : get all orders
 * @url : http://localhost:9000/api/orders/all
 * @params : no-params
 * @method : GET
 * @access : PRIVATE
 */
orderRouter.get('/all', tokenVerifier, async (request: Request, response: Response) => {
    await orderController.getAllOrders(request, response);
})

/**
 * @usage : get my orders
 * @url : http://localhost:9000/api/orders/me
 * @params : no-params
 * @method : GET
 * @access : PRIVATE
 */
orderRouter.get('/me', tokenVerifier, async (request: Request, response: Response) => {
    await orderController.getMyOrders(request, response);
})

/**
 * @usage : update order status
 * @url : http://localhost:9000/api/orders/:orderId
 * @params : orderStatus
 * @method : POST
 * @access : PRIVATE
 */
orderRouter.post('/:orderId', [
    body('orderStatus').not().isEmpty().withMessage('orderStatus is required'),
], tokenVerifier, validateForm, async (request: Request, response: Response) => {
    await orderController.updateOrderStatus(request, response);
})

export default orderRouter;
