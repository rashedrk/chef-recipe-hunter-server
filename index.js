const express = require('express')
const app = express()
const port = 3000

const chef = require('./data/chef/chef.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Chef Discoveries server running')
})

//get chef data
app.get('/chef',(req,res) => {
    res.send(chef)
})

app.listen(port, () => {
    console.log(`Chef Discoveries listening on port ${port}`)
})