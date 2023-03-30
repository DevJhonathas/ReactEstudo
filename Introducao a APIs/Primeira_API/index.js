const express = require('express');
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//rostas - endpoints
app.get('/', (req, res) => {
    res.json({message: "Primeira rota criada!"})
})

app.listen(3000)