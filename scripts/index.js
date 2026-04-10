// Seleziona l'area della pagina dove verranno inserite tutte le card dei membri del team
const teamMembersArea = document.querySelector('#team-members-area');


// Funzione che crea una singola card per un membro del team
function createTeamMemberCard(member) {

    // Crea un nuovo elemento <div> che rappresenterà la card
    const cardMember = document.createElement("div");
    cardMember.classList.add("team-member"); // Aggiunge la classe CSS per lo stile

    // Inserisce all'interno della card l'immagine e le informazioni del membro
    cardMember.innerHTML = `
        <div class="image-info">
            <img src="${member.img}" alt="${member.name}">
        </div>
        <div class="member-info">
            <h2 class="name-employee">${member.name}</h2>
            <p class="job-detail-design">${member.role}</p>
            <p class="mail-employee">${member.email}</p>
        </div>
    `;

    return cardMember; // Restituisce la card pronta da aggiungere al DOM
}


// Funzione che mostra tutti i membri del team nella pagina
function renderTeam (){

    // Svuota l'area prima di ricreare tutte le card (evita duplicati)
    teamMembersArea.innerHTML = ""; 
    
    // Cicla su ogni membro dell'array teamMembers
    for (const member of teamMembers) {

        // Crea una card per il membro corrente
        const card = createTeamMemberCard(member);

        // Aggiunge la card all'area visibile nella pagina
        teamMembersArea.appendChild(card);
    }
}

// Mostra i membri iniziali appena la pagina viene caricata
renderTeam();


// Seleziona il form per aggiungere un nuovo membro
const form = document.querySelector('.form-new-member');


// Gestisce l'evento di invio del form
form.addEventListener('submit', (event) => {

    event.preventDefault(); // Impedisce il refresh della pagina

    // Aggiunge un nuovo oggetto (nuovo membro) all'array teamMembers
    teamMembers.push({
        name: form.name.value,   // Legge il valore del campo "name"
        role: form.role.value,   // Legge il valore del campo "role"
        email: form.email.value, // Legge il valore del campo "email"
        img: form.img.value      // Legge il valore del campo "img"
    });

    // Aggiorna la lista visibile dei membri
    renderTeam();

    // Ripulisce i campi del form
    form.reset();
});
