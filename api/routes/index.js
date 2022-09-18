const express = require("express");

const router =express.Router();

const registrationController = require("../controllers/registrationController");

router.route("/registrations")
.get(registrationController.getAll)
.post(registrationController.createOne);

router.route(("/registrations/:registrationId"))
.patch(registrationController.updateOne);

module.exports=router;
