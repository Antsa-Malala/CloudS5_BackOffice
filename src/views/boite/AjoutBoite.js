import React from "react";
import Ajout from "../../components/crud/Ajout";

const AjoutBoite = () => {
    return (
        <Ajout endpoint="/boites" title="Nom de la boite" nom="nomBoite" />
    );
};

export default AjoutBoite;