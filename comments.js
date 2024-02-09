// Create web server
var express = require('express');
var app = express();
var fs = require('fs');

// Create a comment
app.post('/comments', function(req, res) {
    // Create a comment
    var comment = req.body;
    // Save the comment to the database
    fs.appendFile('comments.txt', comment, function(err) {
        if (err) {
            res.send(500, 'Error');
        } else {
            res.send(201, 'Created');
        }
    });
});

// Read all comments
app.get('/comments', function(req, res) {
    // Read all comments
    fs.readFile('comments.txt', function(err, data) {
        if (err) {
            res.send(500, 'Error');
        } else {
            res.send(200, data);
        }
    });
});

// Update a comment
app.put('/comments/:id', function(req, res) {
    // Update a comment
    var id = req.params.id;
    var comment = req.body;
    // Save the comment to the database
    fs.writeFile('comments.txt', comment, function(err) {
        if (err) {
            res.send(500, 'Error');
        } else {
            res.send(200, 'Updated');
        }
    });
});

// Delete a comment
app.delete('/comments/:id', function(req, res) {
    // Delete a comment
    var id = req.params.id;
    // Save the comment to the database
    fs.unlink('comments.txt', function(err) {
        if (err) {
            res.send(500, 'Error');
        } else {
            res.send(200, 'Deleted');
        }
    });
});

app.listen(3000);
