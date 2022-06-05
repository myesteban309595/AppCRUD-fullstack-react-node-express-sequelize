import {Sequelize} from 'sequelize'

const database = 'appfullstackdatabase'

const db = new Sequelize(database, 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db