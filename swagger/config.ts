import swaggerJsDoc from 'swagger-jsdoc';
import swaggerDefinition from './definition'
const options = {
    swaggerDefinition,
    apis : ['src/routes/userRoute']
};
const swaggerSpec = swaggerJsDoc(options);
export default swaggerSpec;