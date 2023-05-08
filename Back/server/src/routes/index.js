const { Router } = require("express");

const clientsRoutes = require("./clientsRoutes/index");
const postsRoutes = require("./postsRoutes/index");
const restaurantsRoutes = require("./restaurantsRoutes/index");

const router = Router();

router.use("/clients", clientsRoutes);
router.use("/posts", postsRoutes);
router.use("/restaurants", restaurantsRoutes);

module.exports = router;
