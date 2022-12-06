function listTimes() {
    // Create divs for all bookable times
    for (let i = 0; i < bookAble.length; i++) {
        let current = bookAble[i];
        console.log(current)
        // Add Div's to the Feed

    }
}


// Support Function to CreateElement
function createElement(tag, className, text, parent) {
    let element = document.createElement(tag);
    element.className = className;
    if (text != null) element.innerText = text;
    if (parent != null) parent.appendChild(element);
    return element;
}

// Display a date list of the coming week
// When clicking on a day, list all the times that are 'bookAble'

// When clicking a time connected to the day, prompt for the name, phone and mail of the user.
// Assign ^ to the listing date+time

// Pop to 'notBookAble' and CSS Style it to red when !empty.