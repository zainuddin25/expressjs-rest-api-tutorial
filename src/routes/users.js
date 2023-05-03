const express = require('express')
const userController = require('../controller/users')

const router = express.Router();

// Read = "GET"
router.get("/", userController.getAllUsers)

// Create = "POST"
router.post("/", userController.createUsers)

// Update = "PATCH"
router.patch("/:id", userController.updateUsers)

// Delete = "DELETE"
router.delete("/:id", userController.deleteUsers)

module.exports = router