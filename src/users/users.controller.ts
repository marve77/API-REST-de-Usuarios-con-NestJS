import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get()
	findAll(): User[] {
		return this.usersService.findAll();
	}


		@Get(':id')
		findOne(@Param('id', ParseIntPipe) id: number): User | { message: string } {
			const user = this.usersService.findOne(id);
			if (!user) {
				return { message: 'Usuario no encontrado' };
			}
			return user;
		}

	@Post()
	create(@Body() createUserDto: CreateUserDto): User {
		return this.usersService.create(createUserDto);
	}


		@Patch(':id')
		update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto): User | { message: string } {
			const user = this.usersService.update(id, updateUserDto);
			if (!user) {
				return { message: 'Usuario no encontrado' };
			}
			return user;
		}

	@Delete(':id')
	remove(@Param('id', ParseIntPipe) id: number): { deleted: boolean } {
		return { deleted: this.usersService.remove(id) };
	}
}
