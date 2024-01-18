import React from "react";

import Liste from "../../components/crud/Liste";

const ListeVille = (props) => {
    let columns = [
        {
        key: "idVille",
        label: "ID",
        _props: { scope: "col" },
        },
        {
        key: "nomVille",
        label: "VILLE",
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
        endpoint="/villes"
        id_nom="idVille"
        nom="nomVille"
        />
    );
};

export default ListeVille;