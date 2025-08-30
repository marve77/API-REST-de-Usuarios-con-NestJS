import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import * as usersData from '../Data/bd.json';

@Injectable()
export class UsersService {
		private users: User[] = (usersData as any).default;

		findAll(): User[] {
			return this.users;
		}

			findOne(id: number): User | undefined {
				return this.users.find(user => user.id === id);
			}

			create(createUserDto: any): User {
				const newId = this.users.length > 0 ? Math.max(...this.users.map(u => u.id)) + 1 : 1;
				const newUser: User = {
					id: newId,
					...createUserDto
				};
				this.users.push(newUser);
				return newUser;
			}

			update(id: number, updateUserDto: any): User | undefined {
				const userIndex = this.users.findIndex(user => user.id === id);
				if (userIndex === -1) return undefined;
				this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
				return this.users[userIndex];
			}

			remove(id: number): boolean {
				const userIndex = this.users.findIndex(user => user.id === id);
				if (userIndex === -1) return false;
				this.users.splice(userIndex, 1);
				return true;
			}
}
