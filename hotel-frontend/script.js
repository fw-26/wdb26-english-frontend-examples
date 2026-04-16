
const API_URL = "http://127.0.0.1:8080";
//const API_URL = "https://wdb26-english-examples-deployment-testing.2.rahtiapp.fi/api/ip";

async function getRooms() {
    const res = await fetch(`${API_URL}/rooms`);
    const rooms = await res.json();

    console.log(rooms);
    for (room of rooms) {
        document.getElementById("room-list").innerHTML += `
            <option value="${room.id}">
                ${room.room_number} -
                ${room.room_type} -
                ${room.price} €
            </option>
        `;
    }
}
getRooms();


async function getBookings() {
    const res = await fetch(`${API_URL}/bookings`);
    const bookings = await res.json();

    console.log(bookings);
    document.getElementById("bookings-list").innerHTML = "";
    for (booking of bookings) {
        document.getElementById("bookings-list").innerHTML += `
            <li>
                ${booking.id} - ${booking.datefrom}
            </li>
        `;
    }
}
getBookings();

async function saveBooking() {

    const booking = {
        room_id: document.getElementById("room-list").value,
        guest_id: 1,
        datefrom: document.getElementById("datefrom").value,
        dateto: document.getElementById("dateto").value,
        info: document.getElementById("info").value
    }

    const res = await fetch(`${API_URL}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking)
    });
    const resData = await res.json();

    console.log(resData);
    getBookings();
}


document.getElementById('btn-save').addEventListener('click', saveBooking);