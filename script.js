const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

drawCard();

const myForm = document.getElementById("addForm");

//Per aggiungere l'evento addMember al submit
myForm.addEventListener("submit", addMember);

//Funzione per creare il template della carta del membro ed inserirla nell'html
function drawCard() {
  //Creo una variabile vuota in cui andrò ad inserire tutte le carte create
  let template = "";
  const teamContainer = document.querySelector(".team-container");

  //Ciclo che prende sia il valore che l'indice dell'array
  teamMembers.forEach((value, index) => {
    template += `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="d-flex flex-column bg-dark text-white position-relative">
        <img src="${value.img}" alt="${value.name}">
        <div class="d-flex flex-column align-items-center pt-3">
          <h3>${value.name}</h3>
          <p class="fs-4">${value.role}</p>
          <button class="btn btn-secondary position-absolute top-0 end-0 m-3 myButton" data-index="${index}">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  `;
  });

  //Per aggiungere le carte nell'html
  teamContainer.innerHTML = template;
  const myButtons = document.querySelectorAll(".myButton");

  //Per ciclare su ogni elemento che ha come classe "myButton"
  myButtons.forEach(button => {
    //Per aggiungere ad ogni bottone un evento al click
    button.addEventListener("click", function () {
      //Prendo l'attributo data-index e passo l'indice alla funzione deleteMember per rimuovere l'elemento selezionato
      const index = button.getAttribute("data-index");
      deleteMember(index); // Passa l'indice al click
    });
  });
}

//Funzione per prendere i dati dalle caselle di input, e aggiungere il nuovo membro nell'array "teamMembers"
function addMember(event) {
  event.preventDefault();
  event.stopPropagation();
  let name = document.getElementById("name").value;
  let role = document.getElementById("role").value;
  let img = document.getElementById("image").value;

  const newMember = {
    name,
    role,
    img,
  };
  teamMembers.push(newMember);
  drawCard();
}

//Funzione per rimuovere una carta dei membri tramite l'indice
function deleteMember(index) {
  teamMembers.splice(index, 1);
  drawCard();
}