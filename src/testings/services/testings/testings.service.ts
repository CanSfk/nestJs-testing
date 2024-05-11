import { BadRequestException, Injectable } from '@nestjs/common';
import { TestCustomerDto } from 'src/testings/dto/TestCustomer.dto';

interface CustomerType {
  id: number;
  email: string;
}

@Injectable()
export class TestingsService {
  private customers: CustomerType[] = [
    {
      id: 1,
      email: 'email1@gmail.com',
    },
    {
      id: 2,
      email: 'email2@gmail.com',
    },
    {
      id: 3,
      email: 'email3@gmail.com',
    },
  ];

  testCustomer(testCustomerDto: TestCustomerDto) {
    const { email } = testCustomerDto;
    const customer = this.customers.find(
      (customer) => customer.email === email,
    );

    if (customer)
      return {
        id: customer.id,
        status: 'success',
      };
    else throw new BadRequestException();
  }
}
