import { React, useEffect, useState } from 'react'
import {
    CButton,
    CTable,
} from '@coreui/react'

import { Link } from 'react-router-dom'
import { CSpinner } from '@coreui/react';

const ListeA = (props) => {
    let[ nom, setNom ] = useState("");
    let[ id, setId ] = useState("");
    const[ items, setItems ] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token');

    const fetchItems = ( endpoint ) => {
        let url = process.env.REACT_APP_API_URL + endpoint;
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if( this.readyState === 4 ){
                if( this.status === 200 ){
                    let response = JSON.parse(this.responseText);
                    //setItems(response);
                    console.log(response);
                    console.log(items);
                    formatDatas( response.data, endpoint );
                }
            }
        };
        // console.log(url);
        xhttp.open( "GET" , url, true );
        xhttp.setRequestHeader('Authorization', `Bearer ${token}`);
        xhttp.send(null);
    };

    const formatDatas = ( response, endpoint ) => {
        response.map( item => formatData(item, endpoint) );
        setItems(response);
        setLoading(false);
    };

    const formatData = ( item, endpoint ) => {
        console.log(item.etat);
        if( item.etat === 0 ){
            item['etat'] = "Non Validée";
        }else if(item.etat === 20){
            item['etat'] = "Validée";
        }else if(item.etat === 30){
            item['etat'] = "Vendue";
        }
        item['details'] = (
            <Link to={ `details/${item[id]}` } style={{ color:"#DAAB3A",textDecoration:"none" }}> Détails </Link>
        );
        item['delete'] = (
            <CButton type="button" onClick={ () => deleteProducts( item[id], endpoint ) } style={{ color:"#E7414D",textDecoration:"none" }}> Supprimer </CButton>
        );
        // console.log(item);
        return item;
    };

    const deleteProducts = ( id, endpoint ) => {
        let url = process.env.REACT_APP_API_URL + endpoint + "/" + id;
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if( this.readyState === 4 ){
                if( this.status === 200 ){
                    fetchItems( endpoint );
                }
            }
        };
        xhttp.open( "DELETE" , url , true );
        xhttp.send(null);
    };

    useEffect( () => {
        setNom( props.nom );
        nom = props.nom;
        id = props.id_nom;
        console.log(id);
        fetchItems( props.endpoint );
        console.log(nom);
        //console.log('vita ve');
        // console.log(items);
    }, [] );

    return(
    <div>
    {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
            <CSpinner color="danger" />
        </div>
    ) : (
        <CTable columns={props.columns} items = {items} />
        )}
    </div>
    );

};

export default ListeA;