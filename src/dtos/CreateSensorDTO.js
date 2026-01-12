class CreateSensorDTO {
  constructor({ deviceId, temperature, humidity }) {
    this.deviceId = String(deviceId);
    this.temperature = Number(temperature);
    this.humidity = Number(humidity);
  }
}

export default CreateSensorDTO;
