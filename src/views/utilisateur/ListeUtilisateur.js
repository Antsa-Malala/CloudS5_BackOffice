import React from "react";

import Liste from "../../components/crud/Liste";

const ListeUtilisateur = (props) => {
    let columns = [
        {
            key: "idUtilisateur",
            label: "ID",
            _props: { scope: "col" },
        },
        {
            key: "nom",
            label: "NOM",
            _props: { scope: "col" },
        },
        {
            key: "prenom",
            label: "PRENOM",
            _props: { scope: "col" },
        },
        {
            key: "mail",
            label: "EMAIL",
            _props: { scope: "col" },
        },
        {
            key: "adresse",
            label: "ADRESSE",
            _props: { scope: "col" },
        },
        {
            key: "contact",
            label: "CONTACT",
            _props: { scope: "col" },
        },
    ];

    return (
        <Liste
        columns={columns}
        endpoint="/utilisateurs"
        id_nom="idUtilisateur"
        nom="nom"
        />
    );
};

export default ListeUtilisateur;