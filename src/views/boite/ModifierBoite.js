import React from "react";
import {useParams} from "react-router-dom";
import Modify from "../../components/crud/Modify";

const ModifierBoite = (props) => {
    let { id, nom, id_nom } = useParams();
    return (
        <Modify title="Modifier Boite" id = { id } nom={nom} id_nom={id_nom} endpoint="/boites" />
    );
};

export default ModifierBoite;