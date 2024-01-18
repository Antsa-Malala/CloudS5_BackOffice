import React from "react";

import Liste from "../../components/crud/Liste";

const ListeCouleur = (props) => {
    let columns = [
        {
        key: "idCouleur",
        label: "ID",
        _props: { scope: "col" },
        },
        {
        key: "nomCouleur",
        label: "COULEUR",
        _props: { scope: "col" },
        },
        {
        key: "modify",
        label: "",
        _props: { scope: "col" },
        },
        {
        key: "delete",
        label: "",
        _props: { scope: "col" },
        },
    ];

    return (
        <Liste
        columns={columns}
        endpoint="/couleurs"
        id_nom="idCouleur"
        nom="nomCouleur"
        />
    );
};

export default ListeCouleur;