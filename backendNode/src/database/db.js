import {Sequelize} from 'sequelize'

const database = 'fullstack_database'

const db = new Sequelize(database, 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db