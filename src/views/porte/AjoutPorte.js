import React from "react";
import Ajout from "../../components/crud/Ajout";

const AjoutPorte = () => {
    return (
        <Ajout endpoint="/portes" title="Nom de la porte" nom="nomPorte" />
    );
};

export default AjoutPorte;