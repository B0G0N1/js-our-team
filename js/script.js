// MILESTONE 0: Creato l'array di oggetti
const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
];


// MILESTONE 1: Stampo su console gli oggetti con le info
for (let i = 0; i < team.length; i++) {
    let member = team[i];
    console.log(`\nOggetto ${[i + 1]}`);
    console.log(`Nome: ${member.nome}\nRuolo: ${member.ruolo}\nFoto: ${member.foto}`);
}


// MILESTONE 2: Stampo le informazioni su DOM sotto forma di stringhe
let teamContainer = document.getElementById('team-container');
for (let member of team) {
    let info = document.createElement('p');
    info.textContent = `Nome: ${member.nome}, Ruolo: ${member.ruolo}, Foto: ${member.foto}`;
    teamContainer.appendChild(info);
}