import React from "react";
import Ajout from "../../components/crud/Ajout";

const AjoutPlace = () => {
    return (
        <Ajout endpoint="/places" title="Nom de la place" nom="valeur" />
    );
};

export default AjoutPlace;