const teamMembersArea = document.querySelector('#team-members-area');

function createTeamMemberCard(member) {
    const cardMember = document.createElement("div");
    cardMember.classList.add("team-member");

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
    return cardMember;
}
function renderTeam (){
    teamMembersArea.innerHTML = ""; 
for (const member of teamMembers) {
    const card = createTeamMemberCard(member);
    teamMembersArea.appendChild(card);
}
}

renderTeam();


