import React from 'react'
import Ajout from '../../components/crud/Ajout'

// Okey misy ajout eto

const AjoutModele = () => {
  return (
    <Ajout endpoint="/marques" title = "Nom de la Marque" nom="nomMarque" />
  );
};

export default AjoutModele;