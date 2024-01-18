import React from "react";
import {useParams} from "react-router-dom";
import Modify from "../../components/crud/Modify";

const ModifierPlace = (props) => {
    let {id, nom, id_nom} = useParams();

    return (
        <Modify title="Modifier Place" nom={nom} id={id} id_nom={id_nom} endpoint="/places"/>
    );
};

export default ModifierPlace;