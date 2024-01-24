import React, { useEffect, useState } from 'react';
import { CTable } from '@coreui/react';
import { Link } from 'react-router-dom'
import { CSpinner } from '@coreui/react';
import {
	CButton,
  } from '@coreui/react'

const ListeModele = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  const loadModels = () => {
    let url = process.env.REACT_APP_API_URL + '/modeles';
    console.log(url);
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          const data = JSON.parse(this.responseText);
          setItems(data.data);
          setLoading(false);
        }
      }
    };
    xhttp.open('GET', url, true);
    xhttp.setRequestHeader('Authorization', `Bearer ${token}`);
    xhttp.send(null);
  };


  const deleteModeles = ( id ) => {
    let url = process.env.REACT_APP_API_URL + "/modeles/" + id;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if( this.readyState === 4 ){
        if( this.status === 200 ){
			loadModels();
          }
      }
    };
    xhttp.open( "DELETE" , url , true );
    xhttp.setRequestHeader('Authorization', `Bearer ${token}`);
    xhttp.send(null);
  };

  useEffect(() => {
    loadModels();
  }, []);

  return (
    <div>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
          <CSpinner color="info" />
        </div>
      ) : (
      <CTable responsive="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>MODELE</th>
            <th>MARQUE</th>
            <th>CATEGORIE</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((item, index) => (
              <tr key={index}>
                <td>{item.idModele}</td>
                <td>{item.nomModele}</td>
                <td>{item.marque.nomMarque}</td>
                <td>{item.categorie.nomCategorie}</td>
                <td><Link to={ `modifier/${item.idModele}` } > Modifier </Link></td>
				<td><CButton type="button" onClick={ () => deleteModeles( item.idModele ) }> Supprimer </CButton></td>
              </tr>
            ))}
        </tbody>
      </CTable>
      )}
    </div>
  );
};

export default ListeModele;
