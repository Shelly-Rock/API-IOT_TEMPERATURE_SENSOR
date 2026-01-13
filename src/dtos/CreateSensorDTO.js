class CreateSensorDTO {
  constructor({ deviceId, temperature, humidity, status }) {
    this.deviceId = deviceId ? String(deviceId) : "ESP8266"; // mặc định nếu ESP ko gửi
    this.temperature = Number(temperature);
    this.humidity = Number(humidity);
    this.status = status ? String(status) : "NORMAL";
  }
}

export default CreateSensorDTO;
