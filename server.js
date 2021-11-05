const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('hEllO wOrlD');
})

app.get('/:units/:length/:width/:weight', (req, res) => {

    var units = req.params.units;

    var length = req.params.length;

    var width = req.params.width;

    var weight = req.params.weight;
    console.log(units, length, width, weight);
    
    res.json({units,length,width,weight});

})

app.listen(4000)
