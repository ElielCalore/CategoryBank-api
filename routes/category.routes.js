const router = require("express").Router();
const isAuth = require("../middlewares/isAuth");
const attachCurrentUser = require("../middlewares/attachCurrentUser");

const CategoryModel = require("../models/Category.model");
const { route } = require("./user.routes");
const UserModel = require("../models/User.model");
const e = require("express");

//CREATE

router.post("/new-category", isAuth, attachCurrentUser, async (req, res) => {
  const loggedInUser = req.currentUser;
  try {
    const newCategory = await CategoryModel.create(req.body);
    await UserModel.findOneAndUpdate(
      { _id: loggedInUser._id },
      { $push: { categories: newCategory._id } },
      { new: true }
    );
    return res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//READ - ALL USER'S CATEGORY

router.get("/categories", isAuth, attachCurrentUser, async (req, res) => {
  const loggedInUser = req.currentUser;
  try {
    const categories = await CategoryModel.find({ user: loggedInUser._id });
    return res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//READ - CATEGORY DETAILS
router.get("/:categoryId", isAuth, attachCurrentUser, async (req, res) => {
  const loggedInUser = req.currentUser;
  const categoryId = req.params;
  try {
    const category = CategoryModel.findOne({ _id: categoryId });

    if (loggedInUser._id !== category.user) {
      return res
        .status(401)
        .json({ message: "You are not authorized to view this category." });
    }

    const categoryDetails = await CategoryModel.findOne({
      _id: categoryId,
    }).populate("transactions");
    return res.status(200).json(categoryDetails);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//READ - SUM OF TRANSACTIONS ON A CATEGORY
router.get();

//UPDATE CATEGORY
router.patch(
  "/update/:categoryId",
  isAuth,
  attachCurrentUser,
  async (req, res) => {
    const loggedInUser = req.currentUser;
    const categoryId = req.params;

    delete req.body.transactions;

    try {
      const category = CategoryModel.findOne({ _id: categoryId });

      if (loggedInUser._id !== category.user) {
        return res
          .status(401)
          .json({ message: "You are not authorized to edit this category." });
      }

      const editedCategory = await CategoryModel.findOneAndUpdate(
        { _id: categoryId },
        { ...req.body },
        { new: true, runValidators: true }
      );

      return res.status(200).json(editedCategory);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
);

//DELETE CATEGORY
router.delete();

module.exports = router;
