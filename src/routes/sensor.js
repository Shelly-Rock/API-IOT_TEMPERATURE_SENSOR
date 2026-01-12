import express from 'express';
import { createSensor } from '../controllers/sensorController.js';

const router = express.Router();

/**
 * @openapi
 * /api/v1/sensor:
 *   post:
 *     summary: Nhận dữ liệu từ cảm biến Arduino
 *     tags:
 *       - Sensor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               temperature:
 *                 type: number
 *                 example: 28.5
 *               humidity:
 *                 type: number
 *                 example: 60
 *     responses:
 *       '201':
 *         description: Lưu dữ liệu thành công
 *       '500':
 *         description: Lỗi hệ thống
 */
router.post('/', createSensor);

export default router;