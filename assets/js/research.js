/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "La musculation",
        authors : "",
        conferences : "Fan de sport depuis mon enfance, j'ai d'abord pratiqué le basketball et le volleyball pour ensuite me tourner vers la musculation. Cela fait maintenant 4 ans que je pratique cette activité, déterminé, je suis prêt à repousser mes limites pour progresser.",
        researchYr : "2018",
        citebox : "popup1",
        image : "dos.jpg",
        citation: {
            vancouver: ""
        },
        abstract: "",
        absbox: ""
    },

    {
        title : "Les jeux vidéos",
        authors : "",
        conferences : "Joueur depuis mon enfance, les jeux vidéos sont ",
        researchYr : "",
        citebox : "",
        image : "",
        citation: {
            vancouver: ""
        },

    },

    {
        title : "Crytomonnaie",
        authors : "",
        conferences : "",
        researchYr : "",
        citebox : "",
        image : "",
        citation: {
            vancouver: ""
        },
        abstract: "",
        absbox: ""
    }
];
AOS.init();   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox, citation, absbox, abstract}) =>
        (output +=`
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="https://ecoledutigre.fr" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
        

                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

