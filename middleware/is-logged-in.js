exports = module.exports = function () {
	return function (req, res, next) {
        // do something if the user is logged in
        if (!req.session.loggedIn) return res.redirect('/');
        return next();
    };
};