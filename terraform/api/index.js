/**
 * Está na porta: 8080 
    * http://127.0.0.1:8080/
    * http://127.0.0.1:8080/version
 */

const express = require('express');
const app = express();

    app.get('/version', (req, res) => {
    res.json (
        {
            hello: 'hello world', 
            version: 'v1'
        });
    });

app.listen(8080);

