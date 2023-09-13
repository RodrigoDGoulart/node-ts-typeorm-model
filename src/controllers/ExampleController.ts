import { Request, Response } from "express";

class ExampleController {
  public async example (req: Request, res: Response) {
    return res.json({exemplo: 'exemplo de retorno'});
  }
}

export default new ExampleController();