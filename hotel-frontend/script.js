
const API_URL = "http://127.0.0.1:8080";
//const API_URL = "https://wdb26-english-examples-deployment-testing.2.rahtiapp.fi/api/ip";

async function getRooms() {
    const res = await fetch(`${API_URL}/rooms`);
    const rooms = await res.json();

    console.log(rooms);
    for (room of rooms) {
        document.getElementById("room-list").innerHTML += `
            <li>
                ${room.room_number} -
                ${room.room_type} -
                ${room.price} €
            </li>
        `;
    }
}
getRooms();