/**
 * @jsx React.DOM
 */
'use strict';

// config
var config = require('./config');

// dependencies
var React = require('react');
var ReactAsync = require('react-async');

// custom components
var Head = require('./modules/components/head');
var LoginForm = require('./modules/components/login-form');

// Main page component (this is asyncronous)
var Landing = React.createClass({
    mixins: [ReactAsync.Mixin],

    getInitialStateAsync: function (callback) {
        callback(null, this.props); // set the input props as state (equal to 'return this.props' in getInitialState, but async)
    },

    render: function() {
        return (
            <html>
                <Head title={this.state.title} description={this.state.description}></Head>
                <body id="landing">
                    <div className="container">
                        <div className="jumbotron text-center">
                            <h1><span className="fa fa-cloud"></span> {this.state.title}</h1>

                            <LoginForm />
                        </div>
                    </div>
                </body>
            </html>
        );
    }
});

module.exports = Landing;

// If the file is processed by the browser, it should mount itself to the document and 'overtake' the markup from the server without rerendering
if (typeof window !== 'undefined') {
    // enable the react developer tools when developing (loads another 450k into the DOM..)
    if (config.environment == 'development') {
        window.React = require('react');
    }

    window.onload = function () {
        React.renderComponent(Landing(), document);
    }
}
