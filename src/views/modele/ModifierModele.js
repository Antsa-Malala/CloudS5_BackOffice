import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CButton,
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
} from '@coreui/react';

const ModifierModele = () => {
  let [item, setItem] = useState({
    nomModele: '',
    categorie: {},
    marque: {},
  });

  let [categories, setCategories] = useState([]);
  let [marques, setMarques] = useState([]);
  let [modeles, setModeles] = useState("");
  let [selectedCategory, setSelectedCategory] = useState(null);
  let [selectedMarque, setSelectedMarque] = useState(null);
  let { id } = useParams();
  const token = localStorage.getItem('token');

  const loadModel = () => {
    let url = process.env.REACT_APP_API_URL + '/modeles/' + id;
    fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        setItem(data.data);
        setModeles(data.data.nomModele)
        setSelectedMarque(data.data.marque)
        setSelectedCategory(data.data.categorie)
      })
      .catch(error => console.error('Erreur lors du chargement du modèle:', error));
  };

  const loadMarques = () => {
    let url = process.env.REACT_APP_API_URL + '/marques';
    fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        setMarques(data.data);
      })
      .catch(error => console.error('Erreur lors du chargement des marques:', error));
  };

  const loadCategories = () => {
    let url = process.env.REACT_APP_API_URL + '/categories';
    fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        setCategories(data.data);
      })
      .catch(console.error('Erreur lors du chargement des catégories:', 403));
  };

  const handleUpdate = ( ) => {
		let url = process.env.REACT_APP_API_URL + '/modeles/' + item.idModele;
    const content={
      nomModele: modeles,
      marque: selectedMarque,
      categorie: selectedCategory,
      etat: item.etat,
    };
    console.log(content);
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
		if( this.readyState === 4 ){
			if( this.status === 200 ){
        window.location.href = "#/modeles"; 
			}
      else{
        console.error('Erreur lors de la mise à jour du modèle:')
      }
		}
		};
		xhttp.open( "PUT" , url, true );
		xhttp.setRequestHeader('Authorization', `Bearer ${token}`);
		xhttp.setRequestHeader('Content-Type','application/json');
		xhttp.send(JSON.stringify(content));
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
    loadModel();
    loadMarques();
    loadCategories();
  }, [id]);

  return (
    <CForm style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08)",marginTop:"30px",padding:"20px",marginLeft:"30%",marginRight:"auto",borderRadius:"10px",width:"35%",backgroundColor:"white"}}>
      <div className="my-3 col-6">
        <CFormLabel>Nom du modèle</CFormLabel>
        <CFormInput type="text" value={modeles} id="nom" onChange={(event) => handleModeleChange(event)}/>
      </div>

	  <div className="my-3 col-6">
		<CFormLabel>Catégorie</CFormLabel>
		<CFormSelect id="categorie" onClick={(event) => handleCategorieChange(event)}>
			{categories &&
			categories.map((category) => (
				<option key={category.idCategorie} value={category.idCategorie} selected={category.idCategorie === item.categorie?.idCategorie}>
				{category.nomCategorie}
				</option>
			))}
		</CFormSelect>
		</div>

	<div className="my-3 col-6">
	<CFormLabel>Marque</CFormLabel>
	<CFormSelect id="marque" onClick={(event) => handleMarqueChange(event)}>
		{marques &&
		marques.map((marque) => (
			<option key={marque.idMarque} value={marque.idMarque} selected={marque.idMarque === item.marque?.idMarque}>
			{marque.nomMarque}
			</option>
		))}
	</CFormSelect>
	</div>


      <CButton type="button" onClick={handleUpdate} className="my-3" style={{ backgroundColor:"#DAAB3A",border:"none" }}>
        Modifier
      </CButton>
    </CForm>
  );
};

export default ModifierModele;
