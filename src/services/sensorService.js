import Sensor from '../models/sensorModel.js';

class SensorService {
  // CREATE: lưu dữ liệu sensor
  async create(sensorDTO) {
    const sensor = new Sensor(sensorDTO);
    return await sensor.save();
  }

  // GET: lấy tất cả dữ liệu từ MongoDB, mới nhất trước
  async getAll() {
    try {
      const sensors = await Sensor.find().sort({ createdAt: -1 });
      return sensors;
    } catch (error) {
      throw new Error("Failed to fetch sensor data: " + error.message);
    }
  }
  async getLast(){
    try{
      const sensors = await Sensor.findOne().sort({ createdAt: -1 });
      return sensors;
    }catch(error){
      throw new Error("Failed to fetch sensor data: " + error.message);
    }
  }
  // GET: lấy dữ liệu theo deviceId (nếu cần)
  async getByDevice(deviceId) {
    try {
      const sensors = await Sensor.find({ deviceId }).sort({ createdAt: -1 });
      return sensors;
    } catch (error) {
      throw new Error("Failed to fetch sensor data by device: " + error.message);
    }
  }
}

export default new SensorService();
