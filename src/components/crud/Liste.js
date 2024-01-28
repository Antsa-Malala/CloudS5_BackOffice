import { React, useEffect, useState } from 'react'
import { CButton, CTable, CSpinner, CAlert } from '@coreui/react';


import { Link } from 'react-router-dom'

const Liste = (props) => {
  let[ nom, setNom ] = useState("");
  let[ id, setId ] = useState("");
  const [loading, setLoading] = useState(true);
  const[ items, setItems ] = useState([]);
  const[ erreur, setErreur] = useState("");
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
    item['modify'] = (
      <Link to={ `modifier/${item[id]}/${nom}/${id}` }  style={{ color:"#B0C0D4" }}> Modifier </Link>
    );
    item['delete'] = (
      <CButton type="button" onClick={ () => deleteProducts( item[id], endpoint ) } style={{ color:"white",textDecoration:"none",backgroundColor:"#E7414D",border:"none" }}> Supprimer </CButton>
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
        }else{
            const errorResponse = JSON.parse(this.responseText);
            console.error(`Erreur lors de la suppression : ${errorResponse.erreur}`);
            setErreur("Suppression impossible. Elément encore référencé ailleurs.");
        }
        
      }
    };
    xhttp.open( "DELETE" , url , true );
    xhttp.setRequestHeader('Authorization', `Bearer ${token}`);
    xhttp.send(null);
  };

  useEffect( () => {
    setNom( props.nom );
    nom = props.nom;
    id = props.id_nom;
    console.log(id);
    fetchItems( props.endpoint );
    console.log(nom);
  }, [] );

  useEffect(() => {
    if (erreur) {
      const timeoutId = setTimeout(() => {
        setErreur("");
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [erreur]);
  
  return (
    <div>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
          <CSpinner color="danger" />
        </div>
      ) : (
        <div>
          {erreur && (
            <CAlert color="danger">
              {erreur}
            </CAlert>
          )}
          <CTable columns={props.columns} items={items} />
        </div>
      )}
    </div>
  );
  
};

export default Liste;