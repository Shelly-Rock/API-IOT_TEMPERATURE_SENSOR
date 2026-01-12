
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import docs from  "./swaggers/swagger.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/",swaggerUi.serve,swaggerUi.setup(docs));


export default app;
