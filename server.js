const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('hEllO wOrlD');
})

function areUnitsValid(unit) {
    if (unit === 'imperial' || unit === 'metric'){
        return true;
    } else {
        return false;
    }
}

function normalizeUnitsToMetric(units, length, width, weight) {
    if (units === 'metric') {
        return {length: length, width: width, weight: weight}
    } else {
        var metricLength = length * 25.4;
        var metricWidth = width * 25.4;
        var metricWeight = weight * 28.34952;
        return {length: metricLength, width: metricWidth, weight: metricWeight};
    }
}

function isEnvelopeStandard(size){

    if (size.length < 140 || size.length > 245) {
        return false;
    } else if (size.width < 90 || size.width > 156) {
        return false;
    } else if (size.weight < 3 || size.weight > 50) {
        return false;
    } else {
        return true;
    }

}

function isEnvelopeAllowed(size) {
    if (size.length > 380) {
        return false;
    } else if (size.width > 270) {
        return false;
    } else if (size.weight > 500) {
        console.log('here');
        return false;
    } else {
        return true;
    }
}

function calculateShippingCost(isStandard, weight) {
    if (isStandard && weight <= 30) {
        return 0.49;
    } else if (isStandard && (weight > 30 || weight <= 50)) {
        return 0.80;
    } else if (!isStandard && weight <= 100) {
        return 0.98;
    } else {
        return 2.40;
    }
}

app.get('/:units/:length/:width/:weight', (req, res) => {

    var units = req.params.units;
    var length = req.params.length;
    var width = req.params.width;
    var weight = req.params.weight;


    if (!areUnitsValid(units)) {
        res.send('Fail! Invalid units. Please specify either units as either imperial or metric');
        return;
    } 

    if (isNaN(length) || isNaN(width) || isNaN(weight)) {
        res.send('Fail! The length, width, and weight must be numeric values');
        return;
    } 

    length = parseFloat(length, 10);
    width = parseFloat(width, 10);
    weight = parseFloat(weight, 10);
    
    var size = normalizeUnitsToMetric(units, length, width, weight);

    var isAllowed = isEnvelopeAllowed(size);

    if (!isAllowed) {
        res.send('Fail! Envelope is too big and not allowed.');
        return;
    }

    var isStandard = isEnvelopeStandard(size);

    var shippingCost = calculateShippingCost(isStandard, size.weight); 

    res.send(shippingCost+'');


})

app.listen(4000)
