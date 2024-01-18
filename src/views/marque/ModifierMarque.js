import React from 'react'
import {useParams} from 'react-router-dom'
import Modify from '../../components/crud/Modify'

const ModifierModele = ( props ) => {
	let { id, nom, id_nom } = useParams();
	return (
		<Modify title="Modifier Marque" id = { id } nom={nom} id_nom={id_nom} endpoint="/marques" />
	);
};

export default ModifierModele;