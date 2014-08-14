exports = module.exports = function () {
	return function (req, res, next) {
        // handle an api call if the user is logged in
        if (!req.session.loggedIn) return res.send(401, 'not authorized');
        return next();
    };
};