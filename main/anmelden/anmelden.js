// Anmeldungsfunktion
function anmelden() {
    const benutzername = document.getElementById("benutzername").value;
    const passwort = document.getElementById("passwort").value;

    // Hole Benutzerdaten aus localStorage
    const benutzerSpeicher = JSON.parse(localStorage.getItem('benutzerSpeicher')) || [];

    // Überprüfe, ob die Anmeldedaten korrekt sind
    const korrekterBenutzer = benutzerSpeicher.find(user => user.benutzername === benutzername && user.passwort === passwort);

    if (korrekterBenutzer) {
        // Erfolgreiche Anmeldung
        alert("Anmeldung erfolgreich für Benutzer: " + benutzername);
    } else {
        // Fehler bei der Anmeldung
        alert("Fehler bei der Anmeldung. Bitte überprüfen Sie Benutzername und Passwort.");
    }
    
    window.location.href = "../loged/loged.html";
}