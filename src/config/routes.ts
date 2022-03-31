import Router from 'koa-router';
import controller from '../controller/general';

const router = new Router();

router.get('/', controller.helloWorld);
router.get('/key', controller.getKey);
router.post('/key', controller.setKey);

export { router };
