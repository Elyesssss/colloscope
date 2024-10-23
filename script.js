// Charger le JSON contenant les données du colloscope
fetch('colloscope_data.json')
    .then(response => response.json())
    .then(data => {
        let weeks = [...new Set(data.map(item => item.Semaine))];
        let weekSelect = document.getElementById('week');

        // Remplir le sélecteur de semaines
        weeks.forEach(week => {
            let option = document.createElement('option');
            option.value = week;
            option.textContent = week;
            weekSelect.appendChild(option);
        });

        // Afficher la table pour la première semaine par défaut
        displayTable(data, weeks[0]);

        // Changer les données affichées quand la semaine change
        weekSelect.addEventListener('change', function () {
            displayTable(data, this.value);
        });
    })
    .catch(error => console.error('Erreur lors du chargement des données:', error));

// Fonction pour afficher la table selon la semaine sélectionnée
function displayTable(data, selectedWeek) {
    const tableBody = document.getElementById('colloscope-body');
    tableBody.innerHTML = ''; // Effacer le contenu existant

    data
        .filter(item => item.Semaine === selectedWeek)
        .forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.Semaine}</td>
                <td>${item.Groupe}</td>
                <td>${item.Matiere}</td>
                <td>${item.Colleurs}</td>
                <td>${item.Jour}</td>
                <td>${item.Heure}</td>
                <td>${item.Salle}</td>
            `;
            tableBody.appendChild(row);
        });
}
