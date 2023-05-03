const logRequest = (req, res, next) => {
    console.log(`Loging terjadi di ${req.path}`)
    next()
}

module.exports = logRequest