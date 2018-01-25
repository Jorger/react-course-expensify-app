const path = require("path");
const compression = require('compression');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

app.use(compression());
app.use(express.static(publicPath));	

app.listen(process.env.PORT || 3000, () => {
    console.log("Server arriba");
});

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});