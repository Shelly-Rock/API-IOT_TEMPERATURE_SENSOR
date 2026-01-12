import sensorService from "../services/sensorService.js";
import CreateSensorDTO from "../dtos/CreateSensorDTO.js";

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


