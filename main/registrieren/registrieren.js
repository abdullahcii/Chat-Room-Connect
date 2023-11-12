// Registrierungsfunktion
function registrieren() {
    const benutzername = document.getElementById("benutzername").value;
    const passwort = document.getElementById("passwort").value;
    const passwortBestaetigen = document.getElementById("passwortBestaetigen").value;

    // Überprüfe, ob Passwörter übereinstimmen
    if (passwort !== passwortBestaetigen) {
        alert("Die Passwörter stimmen nicht überein.");
        return;
    }

    // Hole Benutzerdaten aus localStorage
    const benutzerSpeicher = JSON.parse(localStorage.getItem('benutzerSpeicher')) || [];

    // Überprüfe, ob der Benutzer bereits registriert ist
    const bereitsRegistriert = benutzerSpeicher.some(benutzer => benutzer.benutzername === benutzername);

    if (bereitsRegistriert) {
        alert("Benutzername bereits registriert. Bitte wählen Sie einen anderen Benutzernamen.");
        return;
    }

    // Speichere Benutzerdaten in localStorage
    benutzerSpeicher.push({ benutzername, passwort });
    localStorage.setItem('benutzerSpeicher', JSON.stringify(benutzerSpeicher));

    // Ausgabe in die Konsole hinzufügen
    console.log("Benutzer hinzugefügt:", benutzerSpeicher);

    // Simuliere eine erfolgreiche Registrierung
    alert("Registrierung erfolgreich!");

    // Weiterleitung zur Indexseite
    window.location.href = "../anmelden/anmelden.html";
}
