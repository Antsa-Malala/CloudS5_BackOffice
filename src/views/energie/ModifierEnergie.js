import React from 'react'
import {useParams} from 'react-router-dom'
import Modify from '../../components/crud/Modify'

const ModifierEnergie = (props ) => {
	let { id, nom, id_nom } = useParams();
	// console.log( useParams() );
	return (
		<Modify title="Modifier Energie" nom={nom} id = { id } id_nom = {id_nom} endpoint="/energies" />
	);
};

export default ModifierEnergie;