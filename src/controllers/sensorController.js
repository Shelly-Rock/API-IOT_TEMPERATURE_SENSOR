import sensorService from "../services/sensorService.js";
import CreateSensorDTO from "../dtos/CreateSensorDTO.js";

// POST: lưu dữ liệu sensor
export const createSensor = async (req, res) => {
  try {
    const dto = new CreateSensorDTO(req.body);
    const result = await sensorService.create(dto);

    res.status(201).json({
      message: 'Sensor data saved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to save sensor data',
      error: error.message,
    });
  }
};

// GET: lấy tất cả dữ liệu sensor từ MongoDB
export const getSensors = async (req, res) => {
  try {
    const sensors = await sensorService.getAll();
    res.status(200).json({
      message: "Sensor data retrieved successfully",
      data: sensors,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve sensor data",
      error: error.message,
    });
  }
};
export const getLastSensor =  async (req, res) => {
  try {
    const sensors = await sensorService.getLast();
    res.status(200).json({
      message: "Sensor data retrieved successfully",
      data: sensors,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve sensor data",
      error: error.message,
    });
  }
};
