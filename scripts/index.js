// Seleziona l'area della pagina dove verranno inserite tutte le card dei membri
const teamMembersArea = document.querySelector('#team-members-area');


// Funzione che crea una singola card per un membro del team
function createTeamMemberCard(member) {

    // Crea un nuovo elemento <div> che rappresenta la card
    const cardMember = document.createElement("div");
    cardMember.classList.add("team-member"); // Aggiunge la classe CSS

    // Inserisce l'immagine e le informazioni del membro dentro la card
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
    
    // Cicla su ogni oggetto dentro l'array teamMembers
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

    event.preventDefault(); // Evita il refresh della pagina

    // Aggiunge un nuovo membro all'array usando i valori del form
    teamMembers.push({
        name: capitalizeWords(form.name.value), // Corregge il nome (prima lettera maiuscola)
        role: form.role.value,
        email: form.email.value,
        img: form.img.value
    });

    // Aggiorna la lista visibile dei membri
    renderTeam();

    // Ripulisce i campi del form
    form.reset();
});


// Funzione che rende maiuscola la prima lettera di ogni parola
function capitalizeWords(str) {

    str = str.trim(); // Rimuove spazi inutili all'inizio e alla fine

    const words = str.split(" "); // Divide la stringa in parole
    const fixedWords = [];        // Array per le parole corrette

    // Cicla su ogni parola
    for (let word of words) {

        if (word === "") continue; // Salta parole vuote (spazi doppi)

        // Prima lettera maiuscola + resto minuscolo
        const fixedWord = word[0].toUpperCase() + word.slice(1).toLowerCase();

        fixedWords.push(fixedWord); // Aggiunge la parola corretta all'array
    }

    return fixedWords.join(" "); // Ricompone la frase corretta
}
