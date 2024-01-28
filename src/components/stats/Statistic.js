import { React, useEffect, useState } from 'react';
import {
	CCol,
	CRow,
	CWidgetStatsF,
	CWidgetStatsB,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { BarChart } from '@mui/x-charts/BarChart';
import { CCard, CCardBody,CCardHeader } from '@coreui/react'
import {
	cilCarAlt,
} from '@coreui/icons'
import {
	CWidgetStatsA,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'

  const Statistic = ( props ) => {
	const [visitors, setVisitors] = useState(null);
	const [publie, setPublie] = useState(null);
	const [vendue, setVendue] = useState(null);
	const [commissions, setCommissions] = useState(null);
	const [annonces, setAnnonces] = useState(null);
	const [voitures, setVoitures] = useState(null);
	const token = localStorage.getItem('token');


	const nbUtilisateur = ( ) => {
		let url = process.env.REACT_APP_API_URL + "/statistiques/nbUtilisateurs";
		console.log(url);
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
		if( this.readyState === 4 ){
			if( this.status === 200 ){
				const data = JSON.parse(this.responseText);
				setVisitors(data.data.nombre); 
			}
		}
		};
		xhttp.open( "GET" , url, true );
		xhttp.setRequestHeader('Authorization', `Bearer ${token}`);
		xhttp.send(null);
	};

	const nbPubliee = ( ) => {
		let url = process.env.REACT_APP_API_URL + "/statistiques/nbPubliees";
		console.log(url);
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
		if( this.readyState === 4 ){
			if( this.status === 200 ){
				const data = JSON.parse(this.responseText);
				setPublie(data.data.nombre); 
			}
		}
		};
		xhttp.open( "GET" , url, true );
		xhttp.setRequestHeader('Authorization', `Bearer ${token}`);
		xhttp.send(null);
	};

	const nbVendue = ( ) => {
		let url = process.env.REACT_APP_API_URL + "/statistiques/nbVendues";
		console.log(url);
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
		if( this.readyState === 4 ){
			if( this.status === 200 ){
				const data = JSON.parse(this.responseText);
				setVendue(data.data.nombre); 
			}
		}
		};
		xhttp.open( "GET" , url, true );
		xhttp.setRequestHeader('Authorization', `Bearer ${token}`);
		xhttp.send(null);
	};

	const commission = ( ) => {
		let url = process.env.REACT_APP_API_URL + "/commissions/commissionByMois";
		console.log(url);
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
		if( this.readyState === 4 ){
			if( this.status === 200 ){
				const data = JSON.parse(this.responseText);
				setCommissions(data.data); 
			}
		}
		};
		xhttp.open( "GET" , url, true );
		xhttp.setRequestHeader('Authorization', `Bearer ${token}`);
		xhttp.send(null);
	};
	
	const annonceBymarque = ( ) => {
		let url = process.env.REACT_APP_API_URL + "/statistiques/annonceByMarque";
		console.log(url);
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
		if( this.readyState === 4 ){
			if( this.status === 200 ){
				const data = JSON.parse(this.responseText);
				setAnnonces(data.data); 
			}
		}
		};
		xhttp.open( "GET" , url, true );
		xhttp.setRequestHeader('Authorization', `Bearer ${token}`);
		xhttp.send(null);
	};

	const voitureBymarque = ( ) => {
		let url = process.env.REACT_APP_API_URL + "/statistiques/venduByMarque";
		console.log(url);
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
		if( this.readyState === 4 ){
			if( this.status === 200 ){
				const data = JSON.parse(this.responseText);
				setVoitures(data.data); 
			}
		}
		};
		xhttp.open( "GET" , url, true );
		xhttp.setRequestHeader('Authorization', `Bearer ${token}`);
		xhttp.send(null);
	};

	useEffect(() => {
		nbUtilisateur();
		nbPubliee();
		nbVendue();
		commission();
		annonceBymarque();
		voitureBymarque();
	  }, []);


	const chartSetting = {
		width: 600,
		height: 467,
	};

	const valueFormatter = (value) => `${value}`;
	
	return(
		<div>
		<CRow>
			<CCol md={6} className="mb-4">
				<CCard className="mb-9">
					<CCardHeader>Commission du site</CCardHeader>
					<CCardBody>
						<div>
						{!commissions ? (
						<div>Chargement...</div>
						) : (
							<BarChart
							dataset={commissions}
							xAxis={[{ scaleType: 'band', dataKey: 'libelle' }]}
							series={[{ dataKey: 'nombre', label: 'Commissions', valueFormatter }]}
							layout="vertical"
							colors={['#8F908D']}
							{...chartSetting}
							/>
						)}
						</div>
					</CCardBody>
				</CCard>
			</CCol>
		<CCol md={6} className="mb-4">
			<CRow>
				<CCol>
					<CWidgetStatsA
						
						style={{ backgroundColor: '#475465',color:"white" }}
						value={visitors !== null ? visitors : 'Chargement...'}
						title="Utilisateurs"
						chart={
							<CChartLine
								className="mt-3 mx-3"
								style={{ height: '70px' }}
								data={{
									labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
									datasets: [
										{
											
											backgroundColor: 'transparent',
											borderColor: 'rgba(255,255,255,.55)',
											pointBackgroundColor: "#475465",
											data: [65, 59, 84, 84, 51, 55, 40],
										},
									],
								}}
								options={{
									plugins: {
										legend: {
											display: false,
										},
									},
									maintainAspectRatio: false,
									scales: {
										x: {
											grid: {
												display: false,
												drawBorder: false,
											},
											ticks: {
												display: false,
											},
										},
										y: {
											min: 30,
											max: 89,
											display: false,
											grid: {
												display: false,
											},
											ticks: {
												display: false,
											},
										},
									},
									elements: {
										line: {
											borderWidth: 1,
											tension: 0.4,
										},
										point: {
											radius: 4,
											hitRadius: 10,
											hoverRadius: 4,
										},
									},
								}}
							/>
						}
					/>
					</CCol>
			</CRow>
			<br></br>
			<CRow>
				<CCol>
					<CWidgetStatsA
						style={{ backgroundColor: '#B0C0D4',color:"white",border:'#B0C0D4' }}
						value={publie !== null ? publie : 'Chargement...'}
						title="Annonces publiées"
						chart={
							<CChartLine
								className="mt-3 mx-3"
								style={{ height: '70px' }}
								data={{
									labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
									datasets: [
										{
											label: 'My First dataset',
											backgroundColor: 'transparent',
											borderColor: 'rgba(255,255,255,.55)',
											pointBackgroundColor: '#B0C0D4',
											data: [59, 70, 50, 84, 51, 60, 40],
										},
									],
								}}
								options={{
									plugins: {
										legend: {
											display: false,
										},
									},
									maintainAspectRatio: false,
									scales: {
										x: {
											grid: {
												display: false,
												drawBorder: false,
											},
											ticks: {
												display: false,
											},
										},
										y: {
											min: 30,
											max: 89,
											display: false,
											grid: {
												display: false,
											},
											ticks: {
												display: false,
											},
										},
									},
									elements: {
										line: {
											borderWidth: 1,
											tension: 0.4,
										},
										point: {
											radius: 4,
											hitRadius: 10,
											hoverRadius: 4,
										},
									},
								}}
							/>
						}
					/>
				</CCol>
			</CRow>
			<br></br>
			<CRow>
				<CCol>
					<CWidgetStatsA
						style={{ backgroundColor: '#E7414D',color:"white",border:'#8F908D' }}
						value={vendue !== null ? vendue : 'Chargement...'}
						title="Voitures vendues"
						chart={
							<CChartLine
								className="mt-3 mx-3"
								style={{ height: '70px' }}
								data={{
									labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
									datasets: [
										{
											label: 'My First dataset',
											backgroundColor: 'transparent',
											borderColor: 'rgba(255,255,255,.55)',
											pointBackgroundColor: '#E7414D',
											data: [90, 40, 80, 40, 85, 50, 90],
										},
									],
								}}
								options={{
									plugins: {
										legend: {
											display: false,
										},
									},
									maintainAspectRatio: false,
									scales: {
										x: {
											grid: {
												display: false,
												drawBorder: false,
											},
											ticks: {
												display: false,
											},
										},
										y: {
											min: 30,
											max: 89,
											display: false,
											grid: {
												display: false,
											},
											ticks: {
												display: false,
											},
										},
									},
									elements: {
										line: {
											borderWidth: 1,
											tension: 0.4,
										},
										point: {
											radius: 4,
											hitRadius: 10,
											hoverRadius: 4,
										},
									},
								}}
							/>
						}
					/>
				</CCol>
			</CRow>
		</CCol>
		</CRow>
		<CCard className="mb-4">
          <CCardHeader>Nombre d&apos;annonces par marque</CCardHeader>
          <CCardBody>
		  <div>
			{!annonces ? (
				<div>Chargement...</div>
			) : (
			<CRow>
				{annonces.map((annonce, index) => (
				<CCol key={index} xs={12} sm={6} lg={3}>
					<CWidgetStatsF
						className="mb-3"
						icon={<CIcon width={24} icon={cilCarAlt} size="xl" />}
						title={annonce.libelle}
						value={annonce.nombre}
						color="warning"
					/>
				</CCol>
				))}
			</CRow>
			)}
			</div>
		</CCardBody>
		</CCard>
		<CCard className="mb-4">
          <CCardHeader>Nombre de voitures vendues par marque</CCardHeader>
          <CCardBody>
		  <div>
			{!voitures ? (
				<div>Chargement...</div>
			) : (
			<CRow>
				{voitures.map((voiture, index) => (
				<CCol key={index} xs={12} sm={6} lg={3}>
					<CWidgetStatsF
						className="mb-3"
						icon={<CIcon width={24} icon={cilCarAlt} size="xl" />}
						title={voiture.libelle}
						value={voiture.nombre}
						color="secondary"
					/>
				</CCol>
				))}
			</CRow>
			)}
			</div>
		</CCardBody>
		</CCard>
		<div/>
	</div>
	);
};

export default Statistic;