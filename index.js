import express from 'express'

const app = express()

app.get('/', async (req, res) => {
    res.status(200).send({ message: "Hello World"})
})

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})