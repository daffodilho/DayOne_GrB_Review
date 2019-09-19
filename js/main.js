import Team from './modules/DataObject.js';

// this is an IIFE -> Immediately Invoked Function Expression
// this is the JavaScript Module Pattern
(() => {
    console.log('fired!');

    let bioData = document.querySelector('.bio-wrapper').children;

    // populate the children with the data object values
    // bioData[0].textContent = Person.name;
    // bioData[1].textContent = Person.role;
    // bioData[2].textContent = Person.bio;

    // bioData[0].src = Person["avatar"];
    // bioData[1].textContent = Person["name"];
    // bioData[2].textContent = Person["role"];
    // bioData[3].textContent = Person["bio"];

    function parsePersonData() {
        // this = the element you clicked on (the button)
        let person = this.textContent;

        // populate the children with the data object values
        bioData[0].src = `images/${Team[person].avatar}`;
        bioData[1].textContent = Team[person].name;
        bioData[2].textContent = Team[person].role;
        bioData[3].textContent = Team[person].bio;
    }

    // loop through the object and build some UI
    for (let person in Team) {
        console.log(person);

        // create a button for each team member
        let currentButton = document.createElement('button');

        // add the person's name to the button
        currentButton.textContent = person;
        // add an event handler to the button
        currentButton.addEventListener("click", parsePersonData);
        // put the button in the team section on index.html
        document.querySelector('.team').appendChild(currentButton);

        // bioData.nextElementSibling.appendChild(currentButton);
    }
    
})();