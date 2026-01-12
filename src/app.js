
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import docs from  "../swagger.js";
import connectDB from "./dbConnect.js";
import sensorRoutes from "./routes/sensor.js";

connectDB();
const app = express();

app.use(cors());        
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(docs));
app.use('/api/v1/sensor', sensorRoutes);

export default app;
