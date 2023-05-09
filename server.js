const express = require('express')
const port = 3000


const app = express()

// Middleware




// Routes

app.get('/:bottlesOfBeer?', (req, res) => {
    const currentBottles = parseInt(req.params.bottlesOfBeer) || 99
    const nextBottles = currentBottles - 1

    let html

    if (req.path === '/0') {
        html = `<h1>0 bottles of Beer on the wall!!!</h1>
        <a href="/">Go home and buy some more!!</a>
`
    } else {

        html = `
        <h1>${currentBottles} Bottles of beer on the wall</h1>
        <a href="/${nextBottles}">Take one down, pass it around</a>
      `

    }

    res.send(html)
})

// listening

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})