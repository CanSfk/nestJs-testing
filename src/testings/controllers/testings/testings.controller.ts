import { Controller, Get, Inject, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { TestingsService } from 'src/testings/services/testings/testings.service';

@Controller('testings')
export class TestingsController {
  constructor(
    @Inject('TESTINGS_SERVICE')
    private readonly testgingsService: TestingsService,
  ) {}

  @Get()
  getTesting(@Req() req: Request, @Res() res: Response) {
    const { page, count } = req.query;

    if (!page || !count)
      res.status(400).send({ msg: 'Missing page or count query parameter.' });
    else res.send(200);
  }
}
