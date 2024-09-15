// swagger.ts
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: 'API documentation for the Users service',
  },
  servers: [
    {
      url: 'http://localhost:3000/api', // Change this to your API server URL
      description: 'API server',
    },
  ],
};

// Options for the swagger-jsdoc
const options = {
  swaggerDefinition,
  apis: ['./controllers/*.ts'], // Path to the API specs
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerSetup = (app: express.Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default swaggerSetup;
