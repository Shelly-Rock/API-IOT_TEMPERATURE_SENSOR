import mongoose from 'mongoose';

const sensorSchema = new mongoose.Schema(
  {
    deviceId: {
      type: String,
      required: true,
      trim: true,
    },
    temperature: {
      type: Number,
      required: true,
    },
    humidity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // tự tạo createdAt, updatedAt
  }
);

const Sensor = mongoose.model('Sensor', sensorSchema);

export default Sensor;
