import { DataTypes } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';

interface UserCreationAttrs {
  email: string;
  name: string;
  lastName: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;
  @Column({ type: DataTypes.STRING, unique: true })
  email: string;
  @Column({ type: DataTypes.STRING })
  name: string;
  @Column({ type: DataTypes.STRING })
  lastName: string;
  @Column({ type: DataTypes.STRING })
  password: string;
}
