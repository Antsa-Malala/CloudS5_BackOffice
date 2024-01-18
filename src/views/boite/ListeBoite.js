import React from "react";

import Liste from "../../components/crud/Liste";

const ListeBoite = (props) => {
    let columns = [
        {
        key: "idBoite",
        label: "ID",
        _props: { scope: "col" },
        },
        {
        key: "nomBoite",
        label: "BOITE",
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
        endpoint="/boites"
        id_nom="idBoite"
        nom="nomBoite"
        />
    );
};

export default ListeBoite;