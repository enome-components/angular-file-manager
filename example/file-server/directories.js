var middleware = require('./middleware');

var directories = function (app, dir) {

  var getPaths = middleware.getPaths(dir);

  app.get('/directories/:path(*)',
          getPaths,
          middleware.readDirectory,
          middleware.createStats,
          middleware.mergePathsAndStats,
          middleware.filterDirectories,
          function (req, res) {
            res.json(res.locals.directories.map(function (directory) {
              return {
                name: directory.name,
                path: res.locals.relative_path + '/' + directory.name,
              };
            }));
          });

  app.del('/directories/:path(*)',
            getPaths,
            middleware.removeDirectory,
            function (req, res) {
              res.send(200);
            });

  app.post('/directories/',
            getPaths,
            middleware.createDirectory,
            function (req, res) {
              res.json({
                name: req.body.name,
                path: res.locals.relative_path + '/' + req.body.name,
              });
            });

  app.put('/directories/',
            getPaths,
            middleware.pathExists,
            middleware.updateDirectory,
            function (req, res) {
              res.json({
                name: req.body.name,
                path: res.locals.relative_path + '/' + req.body.name,
              });
            });

};

module.exports = directories;
