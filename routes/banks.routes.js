const router = require("express").Router();
const isAuth = require("../middlewares/isAuth");
const attachCurrentUser = require("../middlewares/attachCurrentUser");
// const BankModel = require("../models/Bank.model");




//GET ALL BANKS MODEL

router.get("/bank-model", isAuth, attachCurrentUser, async (req, res) => {
    const loggedInUser = req.currentUser;
    try {
        bankTemplate = await BankModel.find({$or:[{user: loggedInUser._id},{user: ''}]})

        return res.status(200).json(bankTemplate)

    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Error finding Bank Models Collection"})
    }
})

//DELETE BANK MODEL

router.delete("/delete/:bankId", isAuth, attachCurrentUser, async (req, res) => {
    const loggedInUser = req.currentUser;
    const bankId = req.params

    try {
        const deletedBank = await BankModel.deleteOne({
            _id: bankId
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Error finding this Bank Model"})
    }
})

//CREATE BANK MODEL

router.post("/custom-bank", isAuth, attachCurrentUser, async (req, res) => {
    const loggedInUser = req.currentUser;
    try {
        const newBankModel = await BankModel.create({
          ...req.body,
          user: loggedInUser._id,
        });
       
        return res.status(201).json(newBankModel);

      } catch (error) {
        console.error(error);
        return res.status(500).json(error);
      }
})






module.exports = router;