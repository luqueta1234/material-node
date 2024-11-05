 import { Sequelize } from "sequelize";

 import dotenv from 'dotenv'

 dotenv.config()

 //Importando uma constante que será nossa conexão
 export const sequelize = new Sequelize(
    /*Aqui vamos receber os parâmetros para nosso
    banco de dados, precisamos falar para o t ypescript
    que vamos receber uma string */
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASS as string,

    {
        dialect: 'mysql',
        port: parseInt(process.env.MYSQL_PORT as string)
    }

 )