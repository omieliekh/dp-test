var
    ROOT_DIR = __dirname + '/',
    fs = require('fs'),
    express = require('express'),
    app = express(),
    server = require('http').createServer(app);

app.use(express.static(__dirname));

//app.use('/app', express.static(ROOT_DIR + '/app'));
//app.use('/css', express.static(ROOT_DIR + '/css'));
//app.use('/node_modules', express.static(ROOT_DIR + '/node_modules'));
//app.use('/images', express.static(ROOT_DIR + '/images'));
//app.use('/favicon.png', express.static(ROOT_DIR + '/favicon.png'));

var paths = {
    '/*': function(req, res){
        var
            files = JSON.parse( fs.readFileSync(ROOT_DIR + 'files.json', 'utf8') ),
            cont = fs.readFileSync(ROOT_DIR + 'index.html', 'utf8');

        //files = files.map(function (item) {
        //    return '<script src="' + item + '"></script>';
        //});

        //cont = cont.replace('</body>', '    '+files.join('\n    ')+'\n</body>');

        res.send(cont);
    },

    '/charts/1': function (req, res) {
        res.send(
            fs.readFileSync(ROOT_DIR + 'mocks/chart-1.json', 'utf8')
        );
    },

    '/charts/2': function (req, res) {
        res.send(
            fs.readFileSync(ROOT_DIR + 'mocks/chart-2.json', 'utf8')
        );
    },

    '/charts/3': function (req, res) {
        res.send(
            fs.readFileSync(ROOT_DIR + 'mocks/chart-3.json', 'utf8')
        );
    },

    '/maps/1': function (req, res) {
        res.send(
            fs.readFileSync(ROOT_DIR + 'mocks/map-1.json', 'utf8')
        );
    }

};

app.get('/*', function(req, res){
    if (typeof paths[req.path] == 'function') {
        paths[req.path](req, res);

    } else if ( ! /\.[a-z]+$/.test(req.path) ) {
        // its needed for angular's url-routing to work
        paths['/*'](req, res);

    } else {
        res.status(404);

    }
});

server.listen(8333);
console.log('Server is running under localhost:8333 ...');