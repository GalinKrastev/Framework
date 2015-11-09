/*
* Factory function to create Controllers, Services ... etc.
* @ type
*/

window.Milo = window.Milo || {};

Milo.controllers = {};
Milo.templates = {};


function Factory() {
    return {
        Controller: Controller,
        Service: Service
    };

    function Controller(name, dependencies) {

    }
};