const colloscopeData = [
    { "Semaine": "11/11/24", "Groupe": "TDB,G3,TIPE B", "Matiere": "Maths", "Colleurs": "Objois", "Jour": "Lundi", "Heure": "17h30-18h25", "Salle": "GE312" },
    { "Semaine": "11/11/24", "Groupe": "TDB,G3,TIPE B", "Matiere": "SI", "Colleurs": "Dupas", "Jour": "Lundi", "Heure": "11h10-12h05", "Salle": "LVD206" },
    { "Semaine": "11/11/24", "Groupe": "TDB,G3,TIPE B", "Matiere": "Anglais", "Colleurs": "Wauquier", "Jour": "Jeudi", "Heure": "10h10-11h05", "Salle": "LVD213" },
    { "Semaine": "18/11/24", "Groupe": "TDA,G1,TIPE A", "Matiere": "Maths", "Colleurs": "Trochon", "Jour": "Jeudi", "Heure": "16h30-17h25", "Salle": "GE113" },
    { "Semaine": "18/11/24", "Groupe": "TDA,G1,TIPE A", "Matiere": "Physique", "Colleurs": "Collo", "Jour": "Lundi", "Heure": "17h30-18h25", "Salle": "LVD213" },
    { "Semaine": "25/11/24", "Groupe": "TDB,G2,TIPE B", "Matiere": "Maths", "Colleurs": "Besson", "Jour": "Mercredi", "Heure": "15h30-16h25", "Salle": "LVD213" },
    { "Semaine": "25/11/24", "Groupe": "TDB,G2,TIPE B", "Matiere": "SI", "Colleurs": "Dupas", "Jour": "Jeudi", "Heure": "16h30-17h25", "Salle": "LVD206" },
    { "Semaine": "25/11/24", "Groupe": "TDB,G2,TIPE B", "Matiere": "Anglais", "Colleurs": "Guillerit", "Jour": "Mercredi", "Heure": "14h20-15h15", "Salle": "GE113" },
    { "Semaine": "02/12/24", "Groupe": "TDB,G3,TIPE A", "Matiere": "Maths", "Colleurs": "Oumida", "Jour": "Jeudi", "Heure": "17h30-18h25", "Salle": "GE07" },
    { "Semaine": "02/12/24", "Groupe": "TDB,G3,TIPE A", "Matiere": "Physique", "Colleurs": "Tremblay", "Jour": "Lundi", "Heure": "18h30-19h25", "Salle": "GE120" },
    { "Semaine": "09/12/24", "Groupe": "TDA,G1,TIPE A", "Matiere": "Maths", "Colleurs": "Jullian", "Jour": "Jeudi", "Heure": "16h30-17h25", "Salle": "GE312" },
    { "Semaine": "09/12/24", "Groupe": "TDA,G1,TIPE A", "Matiere": "SI", "Colleurs": "Lefait", "Jour": "Mercredi", "Heure": "13h20-14h15", "Salle": "LVD205" },
    { "Semaine": "09/12/24", "Groupe": "TDA,G1,TIPE A", "Matiere": "Anglais", "Colleurs": "Khamkham", "Jour": "Mercredi", "Heure": "16h30-17h25", "Salle": "GE118" },
    { "Semaine": "16/12/24", "Groupe": "TDB,G2,TIPE B", "Matiere": "Maths", "Colleurs": "Oumida", "Jour": "Jeudi", "Heure": "16h30-17h25", "Salle": "GE07" },
    { "Semaine": "16/12/24", "Groupe": "TDB,G2,TIPE B", "Matiere": "Physique", "Colleurs": "Tremblay", "Jour": "Lundi", "Heure": "17h30-18h25", "Salle": "GE120" },
    { "Semaine": "16/12/24", "Groupe": "TDB,G2,TIPE B", "Matiere": "Francais", "Colleurs": "Champavere", "Jour": "Mercredi", "Heure": "14h20-15h15", "Salle": "GE118" },
    { "Semaine": "06/01/25", "Groupe": "TDB,G3,TIPE B", "Matiere": "Maths", "Colleurs": "Poulot-Cazajous", "Jour": "Lundi", "Heure": "17h30-18h25", "Salle": "GE308" },
    { "Semaine": "06/01/25", "Groupe": "TDB,G3,TIPE B", "Matiere": "SI", "Colleurs": "Lefait", "Jour": "Jeudi", "Heure": "12h20-13h15", "Salle": "LVD206" },
    { "Semaine": "06/01/25", "Groupe": "TDB,G3,TIPE B", "Matiere": "Anglais", "Colleurs": "Gandrey", "Jour": "Jeudi", "Heure": "16h30-17h25", "Salle": "Z3" },
    { "Semaine": "13/01/25", "Groupe": "TDA,G1,TIPE A", "Matiere": "Maths", "Colleurs": "Objois", "Jour": "Lundi", "Heure": "16h30-17h25", "Salle": "GE312" },
    { "Semaine": "13/01/25", "Groupe": "TDA,G1,TIPE A", "Matiere": "Physique", "Colleurs": "Ben Bacha", "Jour": "Jeudi", "Heure": "16h30-17h25", "Salle": "GE120" }
];

// Charger les semaines uniques dans la liste déroulante
document.addEventListener('DOMContentLoaded', () => {
    let weeks = [...new Set(colloscopeData.map(item => item.Semaine))];
    const weekSelect = document.getElementById('week');

    weeks.forEach(week => {
        const option = document.createElement('option');
        option.value = week;
        option.textContent = week;
        weekSelect.appendChild(option);
    });

    // Afficher le colloscope pour la semaine sélectionnée
    weekSelect.addEventListener('change', () => {
        const selectedWeek = weekSelect.value;
        const filteredData = colloscopeData.filter(item => item.Semaine === selectedWeek);
        displayColloscope(filteredData);
    });

    // Afficher initialement la première semaine
    displayColloscope(colloscopeData.filter(item => item.Semaine === weeks[0]));
});

function displayColloscope(data) {
    const tableBody = document.getElementById('colloscope-body');
    tableBody.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');
        for (let key in row) {
            const td = document.createElement('td');
            td.textContent = row[key];
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    });
}
