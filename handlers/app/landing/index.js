var nodejsx = require('node-jsx').install();
var App = require('../../../client/javascript/landing');

exports = module.exports = function (services, helpers) {
    return function (req, res, next) {
        var context = {
            title: 'Hearsay - Admin',
            description: 'Administrator interface',
        };

        helpers.react.renderMarkupToString({
            component: App,
            clientScripts: ['/javascript/landing.js'],
            context: context,
            staticPage: false,
            callback: function (err, markup) {
                if (err) return next(err);
                res.send(markup);
            }
        });
    };
};
