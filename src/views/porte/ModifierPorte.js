import React from "react";
import { useParams } from "react-router-dom";
import Modify from "../../components/crud/Modify";

const ModifierPorte = (props) => {
    let { id, nom, id_nom } = useParams();
    return (
        <Modify title="Modifier Porte" id = { id } nom={nom} id_nom={id_nom} endpoint="/portes" />
    );
};

export default ModifierPorte;