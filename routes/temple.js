const routes = require("express").Router();
const temples = require("../controllers/temple.js");
// swagger documentation tags
/**
 * @swagger
 * tags:
 *   name: Temples
 *   description: API for managing temples
 */

/**
 * @swagger
 * /temples:
 *   get:
 *     summary: Retrieve a list of temples
 *     tags: [Temples]
 *     responses:
 *       200:
 *         description: A list of temples.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   temple_id:
 *                     type: string
 *                     description: The temple ID.
 *                     example: "1"
 *                   name:
 *                     type: string
 *                     description: The name of the temple.
 *                     example: "Temple A"
 *                   location:
 *                     type: string
 *                     description: The location of the temple.
 *                     example: "Location A"
 */

/**
 * @swagger
 * /temples/{temple_id}:
 *   get:
 *     summary: Retrieve a single temple by ID
 *     tags: [Temples]
 *     parameters:
 *       - in: path
 *         name: temple_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The temple ID.
 *     responses:
 *       200:
 *         description: A single temple.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 temple_id:
 *                   type: string
 *                   description: The temple ID.
 *                   example: "1"
 *                 name:
 *                   type: string
 *                   description: The name of the temple.
 *                   example: "Temple A"
 *                 location:
 *                   type: string
 *                   description: The location of the temple.
 *                   example: "Location A"
 *       404:
 *         description: Temple not found.
 */

routes.get("/", temples.findAll);
routes.get("/:temple_id", temples.findOne);

routes.post("/", temples.create);

routes.put("/:temple_id", temples.update);

routes.put("/", temples.findAllAndUpdate);

routes.delete("/:temple_id", temples.findByIdAndRemove);

routes.delete("/", temples.deleteAll);

routes.get("/published", temples.findAllPublished);

module.exports = routes;
