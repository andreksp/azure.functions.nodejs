const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    resp.send('teste 2');
});

app.listen(3000, () => {
    console.log('teste');
});