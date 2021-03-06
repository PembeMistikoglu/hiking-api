const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const getUserTypes = require("./controllers/users/userTypes");
const getUserDetails = require("./controllers/users/getUserDetails");


// PATH IMPORTS
const getAllPaths = require("./controllers/paths/getAllPaths/index");
const getPathByPathId = require("./controllers/paths/getPathByPathId/index");

// REVIEW IMPORTS
const getReviewByReviewId = require("./controllers/reviews/getReviewByReviewId");
const getPathByCity = require("./controllers/paths/getPathByCity");

const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);
router.post("/register", postUser);
router.get("/user-details", authentication, getUserDetails);

// USER MODIFICATION
router.put("/edit/user", authentication, putUserDetails);
router.get("/user-types", getUserTypes);

// PATH ROUTES
router.get("/paths", getAllPaths);
router.get("/paths/:pathId", getPathByPathId);

// REVIEW ROUTES
router.get("/get-review-by/:reviewId", getReviewByReviewId);
router.get("/path/:city", getPathByCity);

module.exports = router;
