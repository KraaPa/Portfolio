AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [

  {
    title: "Stage Technicien de Support",
    cardImage: "assets/images/experience-page/Atlantic.png",
    place: "Meyzieu - ACTA",
    time: "(2021)",
    desp: "<li>Maintenance des équipements informatiques (hardware et software)</li> <li>configuration des postes de chaque salarié en fonction des besoins</li> <li>Création d'une application d'envoi de mails en C# avec l'IDE Visual Studio</li>",
  },

  {
    title: "Stage Web Designer + Web Master",
    cardImage: "assets/images/experience-page/TaiShiFood.jpg",
    place: "Janneyrias -  Tai Shi Food",
    time: "(10 Janvier 2022 - 18 Février 2022)",
    desp: "<li>Creation d'un site web en WordPress</li><li>Création d'une application mobile en Java avec l'IDE Android Studio</li><li>Gestion des réseaux sociaux de l'entreprise.</li>",
  },
  {
    title: "",
    cardImage: "",
    place: "",
    time: "",
    desp:"",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `  
  
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
            <article class="card-body">
              <header>
  
                <div class="title">
                  <h3>${title}</h3>
          
                </div>
                <p class="meta">
                  <span class="pre-heading">${place}</span><br>
                  <span class="author">${time}</span>
                <ol>
                  ${desp}
                </ol>
              </header>
              
            </article>
        </a>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

