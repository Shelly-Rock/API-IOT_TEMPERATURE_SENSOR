import swaggerJsdoc from 'swagger-jsdoc';
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
        title: 'IoT Temperature Sensor API',
        version: '1.0.0',
        description: 'API nhận dữ liệu nhiệt độ từ Arduino UNO',
        },
        servers: [
        {
            url: 'http://localhost:3000',
            description: 'Local server',
        },
        ],
    },
    apis: ['./src/swagger/*.js'],
}
const  docs = swaggerJsdoc(options);
export default docs;