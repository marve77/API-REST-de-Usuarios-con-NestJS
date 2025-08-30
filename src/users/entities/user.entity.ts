export type Rol = 'mesero' | 'administrador' | 'cajero' | 'cocinero' | 'bartender';

export class User {
  id: number;
  nombre: string;
  email: string;
  password: string;
  rol: Rol;
}
