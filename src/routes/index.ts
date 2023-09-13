import { Router, Request, Response } from "express";
import example from './example';

const routes = Router();

routes.use('/example', example);
routes.get('/another-example', (req: Request, res: Response) => res.json({another_example: 'outro exemplo'}));

//aceita qualquer método HTTP ou URL
routes.use( (req:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );

export default routes;