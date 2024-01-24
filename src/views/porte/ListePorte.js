import React from "react";

import Liste from "../../components/crud/Liste";

const ListePorte = (props) => {
    let columns = [
        {
        key: "idPorte",
        label: "ID",
        _props: { scope: "col" },
        },
        {
        key: "nomPorte",
        label: "NOMBRE DE PORTE",
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
        endpoint="/portes"
        id_nom="idPorte"
        nom="valeur"
        />
    );
};

export default ListePorte;