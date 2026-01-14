import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

//B1: định nghĩa thông tin cơ bản về API

const swaggerDefinition = {
  openapi: "3.0.0", //phien ban openapi
  info: {
    title: "Cyber Community API",
    version: "1.0.0",
    description: "This is the API documentation for our application.",
  },
  servers: [
    {
      url: "http://localhost:3069/api",
      description: "Development server",
    },
  ],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      BearerAuth: [],
    },
  ],
};

//B2: cau hinh swagger-jsdoc

const options = {
  definition: swaggerDefinition,
  apis: ["./src/routers/*.js", "./server.js"],
};
//tao swagger
const swaggerSpec = swaggerJSDoc(options);

//B3: them swagger vao middleware de public swagger-ui

export const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("Swagger UI available at: http://localhost:3069/api-docs");

  // Swagger JSON (cho Postman import)
  app.get("/swagger.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log("Swagger JSON available at: http://localhost:3069/swagger.json");
};
