import React from "react";
import Ajout from "../../components/crud/Ajout";

const AjoutCouleur = () => {
    return (
        <Ajout endpoint="/couleurs" title="Nom de la couleur" nom="nomCouleur" />
    );
};

export default AjoutCouleur;