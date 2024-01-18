import React from "react";
import Ajout from "../../components/crud/Ajout";

const AjoutVille = () => {
    return (
        <Ajout endpoint="/villes" title="Nom de la ville" nom="nomVille" />
    );
};

export default AjoutVille;