function ok() {

    nom = document.getElementById("nom").value;
    email = document.getElementById("email").value;
    date = document.getElementById("date").value;
    time = document.getElementById("time").value;
    guests = document.getElementById("guests").value;
    if (!nom && !email && !date && !time && !guests) {
        alert(" pas de reservation");

    } else {
        alert("Reservation envoyé");
    }
}