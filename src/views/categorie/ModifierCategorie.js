import React from 'react'
import {useParams} from 'react-router-dom'
import Modify from '../../components/crud/Modify'

const ModifierCategorie = ( props ) => {
	let { id, nom, id_nom } = useParams();
	// console.log( nom );
	return (
		<Modify title="Modifier categorie" nom={nom} id = { id } id_nom = { id_nom } endpoint="/categories" />
	);
};

export default ModifierCategorie;