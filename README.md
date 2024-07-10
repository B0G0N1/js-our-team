<!-----------------------
    CONSEGNA ESERCIZIO
------------------------->
Ciao ragazzi,
esercizio di oggi: Our Team
nome repo: js-our-team
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1: Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede
Consigli del giorno: Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
Numero push minimo per l'esercizio base: 5/6
Ecco i dati dell'array di oggetti:
Nome - Ruolo - Foto
Wayne Barnett - Founder & CEO - wayne-barnett-founder-ceo.jpg
Angela Caroll	- Chief Editor	- angela-caroll-chief-editor.jpg
Walter Gordon - Office Manager - walter-gordon-office-manager.jpg
Angela Lopez	- Social Media Manager - angela-lopez-social-media-manager.jpg
Scott Estrada	- Developer - scott-estrada-developer.jpg
Barbara Ramos - Graphic Designer - barbara-ramos-graphic-designer.jpg
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!
P.s. In allegato trovate un esempio di layout e le immagini da utilizzare



<!-------------------
    PSEUDO-CODICE
-------------------->
1. Creare l'array di oggetti (Milestone 0)
   1.1. team = [ { nome, ruolo, foto }, ... ]

2. Stampare su console (Milestone 1)
   2.1. for each membro in team:
        2.1.1. console.log(membro.nome, membro.ruolo, membro.foto)

3. Stampare su DOM come stringhe (Milestone 2)
   3.1. teamContainer = document.getElementById("team-container")
   3.2. for each membro in team:
        3.2.1. p = createElement("p")
        3.2.2. p.textContent = membro.nome + ", " + membro.ruolo + ", " + membro.foto
        3.2.3. teamContainer.appendChild(p)