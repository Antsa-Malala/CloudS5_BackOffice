import React from 'react'
import Ajout from '../../components/crud/Ajout'

// Okey misy ajout eto

const AjoutEnergie = () => {
  return (
    <Ajout endpoint="/energies" title = "Nom de l'energie" nom="nomEnergie" />
  );
};

export default AjoutEnergie;