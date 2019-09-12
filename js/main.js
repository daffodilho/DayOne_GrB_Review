import Person from './modules/DataObject.js';

// this is an IIFE -> Immediately Invoked Function Expression
// this is the JavaScript Module Pattern
(() => {
    console.log('fired!');

    console.log(Person);
})();