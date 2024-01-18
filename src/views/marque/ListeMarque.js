import React from 'react';

import Liste from '../../components/crud/Liste'

const ListeModele = ( props ) =>{
	let columns = [
		{
			key: 'idMarque',
			label: 'ID',
			_props: { scope: 'col' }
		},
		{
			key: 'nomMarque',
			label: 'MARQUE',
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
		<Liste columns = {columns} endpoint="/marques" id_nom="idMarque" nom="nomMarque" />
	);

};

export default ListeModele;