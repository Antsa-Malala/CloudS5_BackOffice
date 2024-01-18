import React from "react";

import ListeA from '../../components/crud_plus/ListeA'

const ListeAnnonce = ( props ) => {
    let column = [
        {
            key:'idAnnonce',
            label:'ID',
            _props: { scope: 'col' }
        },
        {
            key:'dateAnnonce',
            label:'DATE',
            _props: { scope: 'col' }
        },
        {
            key:'description',
            label:'DESCRIPTION',
            _props: { scope: 'col' }
        },
        {
            key:'etat',
            label:'STATUT',
            _props: { scope: 'col' }
        },
        {
            key:'details',
            label:'',
            _props: { scope: 'col' }
        }
        /*,
        {
            key:'delete',
            label:'',
            _props: { scope: 'col' }
        }*/
    ];

    return (
        <ListeA columns = {column} endpoint="/annonces" id_nom="idAnnonce" nom="idAnnonce" />
    );
};

export default ListeAnnonce;