import db from '../database/db.js'
import { DataTypes } from 'sequelize'

const blogModel = db.define('blogs', {  //^ nombre de la tabla en la db
    tittle: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    }
})

export default blogModel