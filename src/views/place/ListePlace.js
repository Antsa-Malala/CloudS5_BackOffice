import React from "react";

import Liste from "../../components/crud/Liste";

const ListePlace = (props) => {
    let columns = [
        {
        key: "idPlace",
        label: "ID",
        _props: { scope: "col" },
        },
        {
        key: "nomPlace",
        label: "NOMBRE DE PLACE",
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
        endpoint="/places"
        id_nom="idPlace"
        nom="valeur"
        />
    );
};

export default ListePlace;