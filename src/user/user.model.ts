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
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  })
  id: string;
  @Column({ type: DataTypes.STRING, unique: true, allowNull: false })
  email: string;
  @Column({ type: DataTypes.STRING, allowNull: false })
  name: string;
  @Column({ type: DataTypes.STRING, allowNull: false })
  lastName: string;
  @Column({ type: DataTypes.STRING, allowNull: false })
  password: string;
}
