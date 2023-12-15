import { UserListUser } from '../models/UserListUser';

export class UserService{
    private static users: UserListUser[] = [
        {
            snum: 'AAA101',
            name: 'Elon',
            age: 45,
            designation: 'CEO',
            company: 'SpaceX',
          },
          {
            snum: 'AAA102',
            name: 'John',
            age: 42,
            designation: 'Sr. Software Engineer',
            company: 'SpaceX',
          },
          {
            snum: 'AAA103',
            name: 'Marius',
            age: 39,
            designation: 'Software Engineer',
            company: 'SpaceX',
          },
    ]
    public static getAllUsers() {
    return this.users
    }
}
