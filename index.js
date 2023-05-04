const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

const chef = require('./data/chef/chef.json')
const recipes = require('./data/recipes/recipes.json')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Chef Discoveries server running')
})

//get chef data
app.get('/chef',(req,res) => {
    res.send(chef)
})
//get chef data by id
app.get('/chef/:id',(req,res) => {
    const id = req.params.id;
    const selectedChef = chef.find(element => element.chef_id === id);
    res.send(selectedChef);
})

//get recipe by chef id
app.get('/recipes/:id', (req,res) => {
    const id = req.params.id;
    const selectedRecipes = recipes.filter( n => n.chef_id === id);
    res.send(selectedRecipes);
})

//get all recipes 
app.get('/recipes', (req,res) => {
    res.send(recipes);
})

app.listen(port, () => {
    console.log(`Chef Discoveries listening on port ${port}`)
})