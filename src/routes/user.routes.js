// src/routes/user.routes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// Create, Read, Update, Delete
router.post("/create-user", userController.createUser);
router.get("/read-user", userController.readUser);
router.put("/update-user", userController.updateUser);
router.delete("/delete-user", userController.deleteUser);

// Users
router.get("/all-users", userController.getAllUsers);
router.get("/user/:id", userController.getUserById);

// Auth
router.post("/login", userController.loginUser);
router.post("/logout", userController.logoutUser);
router.put("/change-password", userController.changePassword);
router.put("/update-profile", userController.updateProfile);

// Admin
router.put("/make-admin/:id", userController.makeAdmin);
router.put("/remove-admin/:id", userController.removeAdmin);

// Search / Filter
router.get("/search", userController.searchUsers);
router.get("/filter", userController.filterUsers);

// Block / Unblock
router.patch("/block-user/:id", userController.blockUser);
router.patch("/unblock-user/:id", userController.unblockUser);

// Email Verification
router.post("/verify-email", userController.verifyEmail);
router.post("/resend-verification", userController.resendVerification);

// Profile Picture
router.post("/upload-profile-picture", userController.uploadProfilePicture);

// Delete Account
router.delete("/delete-account", userController.deleteAccount);

module.exports = router;
