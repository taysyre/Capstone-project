const express = require('express');
const router = express.Router();
const controller = require('../controller/userController');
router.get('^/$|/caffeine', (req,res) => {
  res.status(200).sendFile(path.join(__dirname, '../view/index.html'))
});

router.get('/users', controller.fetchUsers);

router.get('/users/:id', controller.fetchUserById);

router.post('/login', bodyParser.json(), controller.login);

router.post('/register', bodyParser.json(), controller.createUser);

router.patch('/users/:id', bodyParser.json(), controller.updateUser);

router.put('/users/:id', bodyParser.json(), controller.updateUser);

router.delete('/users/:id', controller.deleteUser);
module.exports = router;