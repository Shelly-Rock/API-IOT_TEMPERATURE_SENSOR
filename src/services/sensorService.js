import Sensor from '../models/sensorModel.js';

class SensorService {
  async create(sensorDTO) {
    const sensor = new Sensor(sensorDTO);
    return await sensor.save();
  }
}
export default new SensorService();
