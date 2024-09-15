import { Request, Response } from 'express';
import BirdsRepository from '../repository/birds.repository';

class BirdsController {
  private repository: typeof BirdsRepository;

  constructor(repository: typeof BirdsRepository) {
    this.repository = repository;
  }

  /**
   * @swagger
   * /birds/{userId}:
   *   get:
   *     summary: Fetch all birds for a specific user
   *     tags: [Birds]
   *     parameters:
   *       - in: path
   *         name: userId
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the user
   *     responses:
   *       200:
   *         description: A list of birds for the user
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Bird'
   *       500:
   *         description: Failed to retrieve birds
   */
  getAllBirds = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
      const birds = await this.repository.findAllByUserId(Number(userId));
      res.status(200).json(birds);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve birds" });
    }
  };

  /**
   * @swagger
   * /birds/{id}:
   *   get:
   *     summary: Fetch a specific bird by ID
   *     tags: [Birds]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the bird
   *     responses:
   *       200:
   *         description: A single bird
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Bird'
   *       404:
   *         description: Bird not found
   *       500:
   *         description: Failed to retrieve bird
   */
  getBirdById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const bird = await this.repository.findById(parseInt(id));
      if (bird) {
        res.status(200).json(bird);
      } else {
        res.status(404).json({ error: "Bird not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve bird" });
    }
  };

  /**
   * @swagger
   * /birds:
   *   post:
   *     summary: Create a new bird
   *     tags: [Birds]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - progress
   *               - profit
   *               - ownerId
   *             properties:
   *               progress:
   *                 type: number
   *               profit:
   *                 type: number
   *               ownerId:
   *                 type: integer
   *     responses:
   *       201:
   *         description: Bird created successfully
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Bird'
   *       500:
   *         description: Failed to create bird
   */
  createBird = async (req: Request, res: Response) => {
    const { progress, profit, ownerId } = req.body;
    try {
      const bird = await this.repository.create({ progress, profit, ownerId });
      res.status(201).json(bird);
    } catch (error) {
      res.status(500).json({ error: "Failed to create bird" });
    }
  };

  /**
   * @swagger
   * /birds/{id}:
   *   put:
   *     summary: Update bird information
   *     tags: [Birds]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the bird
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               progress:
   *                 type: number
   *               profit:
   *                 type: number
   *     responses:
   *       200:
   *         description: Bird updated successfully
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Bird'
   *       500:
   *         description: Failed to update bird
   */
  updateBird = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { progress, profit } = req.body;
    try {
      const bird = await this.repository.update(parseInt(id), { progress, profit });
      res.status(200).json(bird);
    } catch (error) {
      res.status(500).json({ error: "Failed to update bird" });
    }
  };

  /**
   * @swagger
   * /birds/{id}:
   *   delete:
   *     summary: Delete a bird by ID
   *     tags: [Birds]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the bird
   *     responses:
   *       204:
   *         description: Bird deleted successfully
   *       500:
   *         description: Failed to delete bird
   */
  deleteBird = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await this.repository.delete(parseInt(id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete bird" });
    }
  };
}

export default new BirdsController(BirdsRepository);
