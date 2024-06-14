const http = require("http");
const Path = require("path");
const fs = require("fs");
const sys = require("util");

const args = sys.parseArgs({
    strict: false,
    options: {
        port: { type: 'string', default: '8080' },
        verbose: { type: 'boolean', default: false },
    }
})

var index = __dirname;
var server = http.createServer(function (req, res) {
    if (args.values.verbose) {
        console.log(req.method, req.headers["user-agent"]);
        console.log('Request: %s', req.url.split('?'))
    }
    var url = req.url.split('?')[0];
    const fileName = Path.resolve(index, "." + (
        url.endsWith('/')? url+'/index.html' : url
    ));
    const extName = Path.extname(fileName).slice(1);

    if (fs.existsSync(fileName)) {
        var mineTypeMap = {
            html: 'text/html;charset=utf-8',
            htm: 'text/html;charset=utf-8',
            xml: "text/xml;charset=utf-8",
            js: "text/javascript;charset=utf-8",
            png: "image/png",
            jpg: "image/jpeg",
            jpeg: "image/jpeg",
            gif: "image/gif",
            css: "text/css;charset=utf-8",
            txt: "text/plain;charset=utf-8",
            ico: "image/x-icon",
        }
        if (mineTypeMap[extName]) {
            res.setHeader('Content-Type', mineTypeMap[extName]);
        }
        var stream = fs.createReadStream(fileName);
        stream.pipe(res);
    } else {
        res.end('404')
    }
})
server.listen(8080);