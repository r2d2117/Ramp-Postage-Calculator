const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('hEllO wOrlD');
})

app.listen(4000)
