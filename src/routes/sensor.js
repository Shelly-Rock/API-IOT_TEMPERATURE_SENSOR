import express from 'express';
import { createSensor, getSensors,getLastSensor } from '../controllers/sensorController.js';

const router = express.Router();

/**
 * @openapi
 * /api/v1/sensor:
 *   post:
 *     summary: Nhận dữ liệu từ cảm biến Arduino/ESP
 *     tags:
 *       - Sensor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - deviceId
 *               - temperature
 *               - humidity
 *             properties:
 *               deviceId:
 *                 type: string
 *                 example: ESP8266
 *                 description: Mã thiết bị gửi dữ liệu
 *               temperature:
 *                 type: number
 *                 example: 28.5
 *                 description: Nhiệt độ đo được
 *               humidity:
 *                 type: number
 *                 example: 60
 *                 description: Độ ẩm đo được
 *               status:
 *                 type: string
 *                 example: NORMAL
 *                 description: Trạng thái thiết bị (NORMAL, HOT, COLD)
 *     responses:
 *       201:
 *         description: Dữ liệu cảm biến đã được lưu thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     deviceId:
 *                       type: string
 *                     temperature:
 *                       type: number
 *                     humidity:
 *                       type: number
 *                     status:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                     __v:
 *                       type: number
 *       500:
 *         description: Lỗi hệ thống khi lưu dữ liệu
 */

/**
 * @openapi
 * /api/v1/sensor:
 *   get:
 *     summary: Lấy tất cả dữ liệu cảm biến từ MongoDB
 *     tags:
 *       - Sensor
 *     responses:
 *       200:
 *         description: Lấy dữ liệu thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       deviceId:
 *                         type: string
 *                       temperature:
 *                         type: number
 *                       humidity:
 *                         type: number
 *                       status:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                       __v:
 *                         type: number
 *       500:
 *         description: Lỗi hệ thống khi lấy dữ liệu
 */
/**
 * @openapi
 * /api/v1/sensor/latest:
 *   get:
 *     summary: Lấy bản ghi cảm biến mới nhất
 *     tags:
 *       - Sensor
 *     responses:
 *       200:
 *         description: Lấy bản ghi mới nhất thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     deviceId:
 *                       type: string
 *                     temperature:
 *                       type: number
 *                     humidity:
 *                       type: number
 *                     status:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                     __v:
 *                       type: number
 *       500:
 *         description: Lỗi hệ thống khi lấy dữ liệu
 */

router.post('/', createSensor);
router.get('/', getSensors);
router.get('/latest', getLastSensor);
export default router;
