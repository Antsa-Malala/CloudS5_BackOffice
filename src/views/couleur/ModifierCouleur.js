import React from "react";
import { useParams } from "react-router-dom";
import Modify from "../../components/crud/Modify";

const ModifierCouleur = (props) => {
    let { id, nom, id_nom } = useParams();
    return (
        <Modify title="Modifier Couleur" id = { id } nom={nom} id_nom={id_nom} endpoint="/couleurs" />
    );
};

export default ModifierCouleur;