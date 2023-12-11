import express from 'express';

import authentication from './authentication';
import users from './users';
import items from './items';
import cart from './cart';

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  items(router);
  cart(router);

  return router;
};
