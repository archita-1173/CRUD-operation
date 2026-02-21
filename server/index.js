const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/crud'
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ error: err.message }))
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id
    UserModel.findById(id)
        .then(user => res.json(user))
        .catch(err => res.status(500).json({ error: err.message }))
})

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id
    UserModel.findByIdAndDelete(id)
        .then(result => res.json(result))
        .catch(err => res.status(500).json({ error: err.message }))
})

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id
    UserModel.findByIdAndUpdate(
        id,
        { name: req.body.name, email: req.body.email, age: req.body.age },
        { new: true }
    )
        .then(user => res.json(user))
        .catch(err => res.status(500).json({ error: err.message }))
})

app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(500).json({ error: err.message }))
})

app.listen(3001, () => {
    console.log('server is running on port 3001')
})
