import { Test, TestingModule } from '@nestjs/testing';
import { TestingsController } from './testings.controller';
import { Request, Response } from 'express';
import { TestingsService } from 'src/testings/services/testings/testings.service';
import { BadRequestException } from '@nestjs/common';

describe('TestingsController', () => {
  let controller: TestingsController;
  let testingsService: TestingsService;

  const requestMock = {
    query: {},
  } as Request;

  const statusResponseMock = {
    send: jest.fn((x) => x),
  };

  const responseMock = {
    status: jest.fn((x) => statusResponseMock),
    send: jest.fn((x) => x),
  } as unknown as Response;

  beforeEach(async () => {
    // ?? Bir test modülü oluşturuluyor ve derleme işlemi yapılıyor.
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestingsController],
      providers: [
        {
          provide: 'TESTINGS_SERVICE',
          useValue: {
            testCustomer: jest.fn((x) => x),
          },
        },
      ],
    }).compile();

    controller = module.get<TestingsController>(TestingsController);
    testingsService = module.get<TestingsService>('TESTINGS_SERVICE');
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('testingsService should be defined', () => {
    expect(testingsService).toBeDefined();
  });

  describe('getTesting', () => {
    it('should return a status of 400', () => {
      controller.getTesting(requestMock, responseMock);
      expect(responseMock.status).toHaveBeenCalledWith(400);
      expect(statusResponseMock.send).toHaveBeenCalledWith({
        msg: 'Missing page or count query parameter.',
      });
    });

    it('should return a stauts of 200 when query params are present', () => {
      requestMock.query = {
        page: '2',
        count: '30',
      };

      controller.getTesting(requestMock, responseMock);
      expect(responseMock.send).toHaveBeenCalledWith(200);
    });
  });

  describe('testCustomer', () => {
    it('should throw an error', () => {
      jest.spyOn(testingsService, 'testCustomer').mockImplementationOnce(() => {
        throw new BadRequestException();
      });

      try {
        const responsse = controller.testCustomer({
          email: 'email1@gmail.com',
        });
      } catch (err) {
        console.log(err);
      }
    });
  });
});
