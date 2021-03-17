const controller = require('../controllers/user');

module.exports = (router) => {
  router.route('/user').get(controller.get);
};
