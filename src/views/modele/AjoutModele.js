import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CButton,
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
} from '@coreui/react';

const AjoutModele = () => {
  let [categories, setCategories] = useState([]);
  let [marques, setMarques] = useState([]);
  let [modeles, setModeles] = useState("");
  let [selectedCategory, setSelectedCategory] = useState(null);
  let [selectedMarque, setSelectedMarque] = useState(null);
  const token = localStorage.getItem('token');

  const loadMarques = ( ) => {
		let url = process.env.REACT_APP_API_URL + "/marques";
		console.log(url);
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
		if( this.readyState === 4 ){
			if( this.status === 200 ){
				const data = JSON.parse(this.responseText);
				setMarques(data.data);
			}
		}
		};
		xhttp.open( "GET" , url, true );
		xhttp.setRequestHeader('Authorization', `Bearer ${token}`);
    xhttp.setRequestHeader('Content-Type','application/json');
		xhttp.send(null);
	};

  const loadCategories = ( ) => {
		let url = process.env.REACT_APP_API_URL + "/categories";
		console.log(url);
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
		if( this.readyState === 4 ){
			if( this.status === 200 ){
				const data = JSON.parse(this.responseText);
				setCategories(data.data);
			}
		}
		};
		xhttp.open( "GET" , url, true );
		xhttp.setRequestHeader('Authorization', `Bearer ${token}`);
    xhttp.setRequestHeader('Content-Type','application/json');
		xhttp.send(null);
	};


  const handleAjout = () => {
    let url = process.env.REACT_APP_API_URL + '/modeles';
    const content = {
      nomModele: modeles,
      marque: selectedMarque,
      categorie: selectedCategory,
      etat: 0,
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
          window.location.href = "#/modeles";
        } else {
          console.error('Erreur lors de l\'ajout du modèle');
        }
      })
      .catch(error => console.error('Erreur lors de la requête fetch:', error));
  };
  
  
  const handleCategorieChange = (event) => {
	const selectedCategoryId = parseInt(event.target.value);
  let categori = categories.find(category => category.idCategorie === selectedCategoryId);
	setSelectedCategory( categori );
	// selectedCategory = categori;
  console.log(selectedCategory);
};

const handleMarqueChange = (event) => {
	const selectedMarqueId = parseInt(event.target.value);
  let marque=marques.find(marque => marque.idMarque === selectedMarqueId);
	setSelectedMarque(marque);
  // selectedMarque = marque;
	console.log(selectedMarque);
  };

  const handleModeleChange = (event) => {
	  setModeles(event.target.value);
  };

  useEffect(() => {
    loadMarques();
    loadCategories();
  },[]);

  return (
    <CForm style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08)",marginTop:"30px",padding:"20px",marginLeft:"30%",marginRight:"auto",borderRadius:"10px",width:"35%",backgroundColor:"white"}}>
      <div>
        <CFormLabel>Nom du modèle</CFormLabel>
        <CFormInput type="text" value={modeles} id="nom" onChange={(event) => handleModeleChange(event)} placeholder="Insérez une nouvelle valeure...."/>
      </div>

	  <div>
		<CFormLabel>Catégorie</CFormLabel>
		<CFormSelect id="categorie" onClick={(event) => handleCategorieChange(event)}>
			{categories &&
			categories.map((category) => (
				<option key={category.idCategorie} value={category.idCategorie}>
				{category.nomCategorie}
				</option>
			))}
		</CFormSelect>
		</div>

	<div>
	<CFormLabel>Marque</CFormLabel>
	<CFormSelect id="marque" onClick={(event) => handleMarqueChange(event)}>
		{marques &&
		marques.map((marque) => (
			<option key={marque.idMarque} value={marque.idMarque}>
			{marque.nomMarque}
			</option>
		))}
	</CFormSelect>
	</div>


      <CButton type="button" onClick={handleAjout} className="my-3" style={{ backgroundColor:"#DAAB3A",border:"none" }}>
        Ajouter
      </CButton>
    </CForm>
  );
};

export default AjoutModele;
