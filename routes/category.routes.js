const router = require("express").Router();
const isAuth = require("../middlewares/isAuth");
const attachCurrentUser = require("../middlewares/attachCurrentUser");

const CategoryModel = require("../models/Category.model");
const { route } = require("./user.routes");

//CREATE

router.post();

//READ - ALL USER'S CATEGORY

router.get();

//READ - CATEGORY DETAILS
router.get();

//READ - SUM OF TRANSACTIONS ON A CATEGORY
router.get();

//UPDATE CATEGORY
router.patch();

//DELETE CATEGORY
router.delete();
