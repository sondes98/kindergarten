import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./EnglishClass.css";
const Outdoorgaming = () => {
  return (
    <div>
      <Navbar/>
      <div className="sec1">
        <h1>Outdoor Gaming</h1>
      </div>
      <div className="sec2F">
        <div className="teacher">
          <img
            className="item-mask"
            src="https://kidslifedev.wpengine.com/wp-content/plugins/designthemes-core-features/shortcodes/images/mask.png"
            alt="teacher"
          />
          <img
            src="https://kidslifedev.wpengine.com/wp-content/uploads/2014/12/team2.jpg"
            alt="teacher"
          />
        </div>
        <div className="french">
          <h3>Bonjour..</h3>
          <h2>Je suis Linda l'institutrice de français</h2>
          <p>
            Dans ce classe je vais aider les enfants à apprendre la langue
            française à la fin de l'année le Teddy sera capable de :
          </p>
        </div>
      </div>
      <br />
      <div className="containerF">
        <div className="columnf dt-sc-one-fourth  first-column">
          <div className="dt-sc-colored-box mustard">
            <h5>Nombres</h5>
            <img
              src="http://institution-maintenon.com/wp-content/uploads/calcul-mental-institution-maintenon.jpg"
              alt
              title
            />
            <p>
              Dans cette rubrique le Teddy va apprendre à compter de 1 à 100
            </p>
          </div>
        </div>

        <div className="columnf dt-sc-one-fourth  first-column">
          <div className="dt-sc-colored-box green">
            <h5>Alphabet</h5>
            <img
              src="https://static.teteamodeler.com/media/cache/thumb_400/lettres-de-lalphabet-exercices-et-activites-sur-les-lettres.jpeg"
              alt
              title
            />
            <p>
              Dans cette rubrique le Teddy va apprendre l'alphabet de a jusqu'à
              z
            </p>
          </div>
        </div>

        <div className="columnf dt-sc-one-fourth  first-column">
          <div className="dt-sc-colored-box pink">
            <h5>Couleurs</h5>
            <img
              src="https://i.pinimg.com/originals/64/fc/6d/64fc6d3062e91d2762a337bc3dc74593.png"
              alt
              title
            />
            <p>
              Dans cette rubrique le Teddy va apprendre les différentes couleurs
            </p>
          </div>
        </div>

        <div className="columnf dt-sc-one-fourth  first-column">
          <div className="dt-sc-colored-box blue">
            <h5>Arbre Familiale</h5>
            <img
              src="https://mapiwee.com/wp-content/uploads/2020/01/AdobeStock_228366029-1-scaled.jpeg"
              alt
              title
            />
            <p>
              Dans cette rubrique le Teddy va construire son propre arbre
              familiale
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  ); 
};

export default Outdoorgaming;
