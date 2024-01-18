import React from 'react';

import Liste from '../../components/crud/Liste'

const ListeCategorie = ( props ) => {

	let columns = [
		{
			key: 'idCategorie',
			label: 'ID',
			_props: { scope: 'col' }
		},

		{
			key: 'nomCategorie',
			label: 'CATEGORIE',
			_props: { scope: 'col' }
		},


		{
			key: 'modify',
			label: '',
			_props : { scope: 'col' }
		},
		{
			key: 'delete',
			label: '',
			_props : { scope: 'col' }
		}
		
	];

	return (
		<Liste columns = {columns} endpoint="/categories" id_nom="idCategorie" nom="nomCategorie" />
	);

};

export default ListeCategorie;