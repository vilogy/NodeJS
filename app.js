const express = require('express');
const app = express();



app.set('port', 8080);

app.get('/hello/:world', function(req, res, next){
    res.json({
        'hello' : req.params.world
    });
});

app.get('/port', function(req, res, next){
    res.json({
        'port' : app.get('port')
    });
});

app.listen(app.get('port'), function () {
    console.log(`Listening on ${ app.get('port') }`);
})