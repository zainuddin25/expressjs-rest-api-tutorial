const userModels = require('./../models/users')

const successMessage = "Success"
const statusCode = {
    success : 200,
    created : 201,
    serverErro : 500
}

const getAllUsers = async (req, res) => {
    const [ data ] = await userModels.getAllUsers()
    
    try {
        res.json({
            data: data,
            message: successMessage,
            statusCode: statusCode.success
        })
    } catch (error) {
        res.json({
            message: 'Server Error',
            statusCode: statusCode.serverErro,
            serverMessage: error
        })
    }
    
}

const createUsers = (req, res) => {
    res.json({
        message: "Post users success",
        data: req.body
    })
}

const updateUsers = (req, res) => {
    const { id } = req.params
    const body = req.body

    res.json({
        message: "Update Success",
        data: body
    })
}

const deleteUsers = (req, res) => {
    const { id } = req.params

    res.json({
        message: "Delete Success"
    })
}

module.exports = {
    getAllUsers,
    createUsers,
    updateUsers,
    deleteUsers
}