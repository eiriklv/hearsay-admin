/** @jsx React.DOM */

'use strict';

var React = require('react');
var ReactAsync = require('react-async');

module.exports = React.createClass({
    displayName: 'Header',

    getInitialState: function () {
        return null;
    },

    shouldComponentUpdate: function() {
        return false;
    },

    render: function() {
        return (
            <nav className='navbar navbar-default' role='navigation'>
                <div className='container'>

                    <div className='navbar-header'>
                        <a className='navbar-brand' href='#'>{this.props.title ? this.props.title : 'Hearsay'}</a>
                    </div>

                </div>
            </nav>
        );
    }
});