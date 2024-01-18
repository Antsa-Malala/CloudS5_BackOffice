import React from "react";
import {useParams} from "react-router-dom";
import Modify from "../../components/crud/Modify";

const ModifierVille = (props ) => {
    let { id, nom, id_nom } = useParams();
    return (
        <Modify title="Modifier Ville" id = { id } nom={nom} id_nom={id_nom} endpoint="/villes" />
    );
};

export default ModifierVille;