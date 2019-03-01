const express = require("express");
const router = express.Router();

const ctrlUser = require("../controllers/user.controller");
const jwtHelper = require("../config/jwtHelper");

router.post('/addUser', ctrlUser.addUser);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userlist', jwtHelper.verifyJwtToken, ctrlUser.getUsers);
router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);

module.exports = router;
