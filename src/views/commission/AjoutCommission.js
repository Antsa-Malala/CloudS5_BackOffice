import React, { useEffect, useState } from 'react';
import {
  CButton,
  CForm,
  CFormLabel,
  CFormInput,
} from '@coreui/react';

const AjoutCommission = () => {
  let [valeur, setValeur] = useState(0);
  const token = localStorage.getItem('token');
  
  const handleValueChange = (event) => {
	setValeur( event.target.value );
    console.log(valeur);
};

const handleAjout = () => {
    let url = process.env.REACT_APP_API_URL + '/pourcentage';
    const content = {
      valeur:valeur
    };
  
    console.log(content);
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content),
    })
      .then(response => {
        if (response.ok) {
          window.location.href = "#/commissions";
        } else {
          console.error('Erreur lors de l\'ajout de la commission');
        }
      })
      .catch(error => console.error('Erreur lors de la requête fetch:', error));
  };

  useEffect(() => {

  },[]);

  return (
    <CForm style={{padding:"20px",borderRadius:"10px",marginLeft:"35%",marginRight:"auto",justifyContent:"center",alignItems:"center"}}>
      <div className="my-3 col-5">
        <CFormLabel>Valeure de la commission</CFormLabel>
        <CFormInput type="text" id="nom" onChange={(event) => handleValueChange(event)} placeholder="Insérez une nouvelle valeure...."/>
      </div>

      <CButton type="button" onClick={handleAjout} className="my-3" style={{ backgroundColor:"#DAAB3A",border:"none" }}>
        Ajouter
      </CButton>
    </CForm>
  );
};

export default AjoutCommission;
