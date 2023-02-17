import { request, Router } from 'express';


const mainRouter = Router();

mainRouter.get('/', (request,response) => {
    
    response.json({

        message: "API Server is running."

    });

});

export { mainRouter };