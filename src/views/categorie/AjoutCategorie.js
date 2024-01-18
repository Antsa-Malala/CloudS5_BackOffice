import React from 'react'
import Ajout from '../../components/crud/Ajout'

// Okey misy ajout eto

const AjoutCategorie = () => {
  return (
    <Ajout endpoint="/categories" title = "Nom de la Categorie" nom="nomCategorie" />
  );
};

export default AjoutCategorie;