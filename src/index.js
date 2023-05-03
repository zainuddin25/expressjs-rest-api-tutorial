const express = require('express')
const userRoutes = require('./routes/users')
const middlewareLogRequest = require('./middleware/logs')

const app = express();

app.use(middlewareLogRequest)
app.use(express.json())

app.use('/users', userRoutes)

app.use('/', (req, res) => {
    res.send('Hallo World')
})

app.listen(3222, () => {
    console.log("Server Started In Port 3222")
})