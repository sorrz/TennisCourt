// Grabbing Elements from the HTML
let bookingform = document.getElementById('booking');

let court = document.getElementById('court')
let times = document.getElementById('times')
let gname = document.getElementById('gname')
let gdate = document.getElementById('date')


// Adding Event Listeners for Submit buttons
bookingform.addEventListener('submit', (e) => createBooking(e)
)

// Setting Variables and Localstorage
let saveBookings = [];
let saves = JSON.parse(localStorage.getItem('saves'));
// For Debugging
// console.log(saves)
// console.log("----------")

// Remove un-bookable Times.
checkAvailable()

// Set the Booked list with the Bookings from LocalStorage
if (saves != null) {
    saveBookings = saves;
    console.log(saveBookings)
}


function checkAvailable() {
    // Add new ones!

    // For each element in the Object ->
    for (i=0; i < saveBookings.length; i++) {
        let booking = saveBookings[i];
        // Check for matching Dates
        if (booking.DateTime == gdate.value) {
            // CHeck for matching times that has matching dates.
            if (booking.BookTime == times.value) {
                // Check for matching Courts, with the same time and date.
                if (booking.CourtName == court.value) {
                    // For each value in Court, Remove the matching pair
                    for (j=0; j < court.children.length; j++) {
                        let option = court.children[j];
                        if (option.value == court.value) {
                            // console.log(option);
                            option.remove();
                            return;
                        }
                    }

                }
            }
        }
    }
    // For debugging only, don't active
    // localStorage.clear();

}



function createBooking(e) {
    e.preventDefault();

    let today = new Date();
    let dateX = today;


// Object Creation for Booking
    let booking = {
        CourtName: court.value,
        DateTime: gdate.value,
        BookTime: times.value,
        GuestName: gname.value,
    }

    alert("Vi har skapat följande boking: \n"
        + booking.CourtName + "\n"
        + booking.DateTime + "\n"
        + booking.BookTime + "\n"
        + booking.GuestName
    )
    console.log(booking);
    saveBookings.push(booking);
    localStorage.setItem('saves', JSON.stringify(saveBookings));
    bookingform.reset();

}



