const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')


// STATIC ASSETS
app.use(express.static('./methods-public'))
// PARSE FORM DATA
app.use(express.urlencoded({ extended: false }))
// PARSE JSON
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)



app.listen(7777, () => {
    console.log('Server is Listening on port 7777...')
})
