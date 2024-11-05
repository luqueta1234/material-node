import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../instances/mysql'

export interface UserInstance extends Model {

    id: number,
    name: string,
    age: number

}