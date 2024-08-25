const express = require('express');
const router = express.Router();

// GET request
router.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// POST request
router.post('/bfhl', (req, res) => {
    let { data } = req.body;
    data = JSON.parse(JSON.parse(data))
    let numbers = []
    let alphabets = []
    let highest_lowercase_alphabet = ""
    if (typeof data.data == "object") {
        data.data.forEach((dt) => {
            console.log(dt)
            if (!isNaN(dt)) {
                numbers.push(dt)
            } else if (typeof dt == "string" && dt.match(/[a-zA-Z]/)) {
                alphabets.push(dt)
            }
            if (isLowerCase(dt) && dt > highest_lowercase_alphabet) {
                highest_lowercase_alphabet = dt
            }
        })
        res.status(200).json({
            is_success: true,
            user_id: "devanshi_rathore_18122002",
            roll_number: "21BCE5172",
            numbers,
            alphabets,
            highest_lowercase_alphabet,
        });
    }
    else {
        res.status(400).json({
            is_success: false,
            user_id: "devanshi_rathore_18122002",
            roll_number: "21BCE5172",
            numbers,
            alphabets,
            highest_lowercase_alphabet,
        });
    }
});

function isLowerCase(str) {
    return str === str.toLowerCase();
}

module.exports = router;
