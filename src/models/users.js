const pool = require('./../config/database')

const getAllUsers = () => {
    const selectUsers = 'select * from users'

    return pool.execute(selectUsers)
}

module.exports = {
    getAllUsers
}