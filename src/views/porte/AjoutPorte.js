import React from "react";
import Ajout from "../../components/crud/Ajout";

const AjoutPorte = () => {
    return (
        <Ajout endpoint="/portes" title="Nombre de porte" nom="valeur" />
    );
};

export default AjoutPorte;