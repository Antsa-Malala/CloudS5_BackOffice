import React from 'react';

import Liste from '../../components/crud/Liste'

const ListeCategorie = ( props ) =>{
	let columns = [
		{
			key: 'idEnergie',
			label: 'ID',
			_props: { scope: 'col' }
		},
		{
			key: 'nomEnergie',
			label: 'ENERGIE',
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
		<Liste columns = {columns} endpoint="/energies" id_nom="idEnergie" nom="nomEnergie" />
	);

};

export default ListeCategorie;