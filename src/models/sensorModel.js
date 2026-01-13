import mongoose from "mongoose";

const sensorSchema = new mongoose.Schema({
  deviceId: { type: String, required: true },
  temperature: { type: Number, required: true },
  humidity: { type: Number, required: true },
  status: { type: String, required: true },
}, { timestamps: true });

const Sensor = mongoose.model("sensors", sensorSchema);
export default Sensor;
