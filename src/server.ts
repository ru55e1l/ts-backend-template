import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { RegisterRoutes } from './routes'; // Adjust the import path according to where your generated routes are

// Optional: Import Swagger UI Express to serve the Swagger documentation
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../dist/swagger.json'; // Adjust the path to your generated swagger.json

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

RegisterRoutes(app);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// General error handler
app.use(function(err: unknown, req: Request, res: Response, next: NextFunction) {
    const status = (err as any).status || 500;
    const message = (err as any).message || 'An error occurred during the request.';
    res.status(status).send({ message });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});