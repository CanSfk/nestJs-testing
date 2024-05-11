import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('testings')
export class TestingsController {
  @Get()
  getTesting(@Req() req: Request, @Res() res: Response) {
    const { page, count } = req.query;

    if (!page || !count)
      res.status(400).send({ msg: 'Missing page or count query parameter.' });
    else res.send(200);
  }
}
