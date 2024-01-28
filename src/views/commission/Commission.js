import { React, useEffect, useState } from 'react';
import {
	CCol,
	CRow,
} from '@coreui/react'
import {
	CWidgetStatsA,
} from '@coreui/react'
import {
  CButton,
  CForm,
  CFormLabel,
  CFormInput,
} from '@coreui/react';
import {
    CDropdown,
    CDropdownMenu,
    CDropdownItem,
    CDropdownToggle,    
  } from '@coreui/react'
  import { CChartBar } from '@coreui/react-chartjs'
  import CIcon from '@coreui/icons-react'
  import { cilArrowBottom, cilOptions } from '@coreui/icons'


  const Commission = ( props ) => {
	const [valeur, setValeur] = useState(null);
  const [entree,setEntree]=useState("");
	const token = localStorage.getItem('token');


	const pourcentage = () => {
		let url = process.env.REACT_APP_API_URL + "/pourcentage";
		console.log(url);
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
		if( this.readyState === 4 ){
			if( this.status === 200 ){
				const data = JSON.parse(this.responseText);
				setValeur(data.data); 
			}
		}
		};
		xhttp.open( "GET" , url, true );
		xhttp.setRequestHeader('Authorization', `Bearer ${token}`);
		xhttp.send(null);
	};

  const handleChange = (event) => {
    setEntree( event.target.value );
    console.log(entree+"bihkj");
};
    
    const handleAjout = () => {
        const i=document.getElementById("nom");
        const input=i.value;
        i.value="";
        setValeur(input);
        let url = process.env.REACT_APP_API_URL + '/pourcentage';
        console.log(valeur);
        const content = {
          valeur:entree
        };
        console.log(content+"bujo");
      
        fetch(url, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(content),
        })
          .then(response => {
            if (response.ok) {
              window.location.href = "#/commissions";
            } else {
              console.error('Erreur lors de l\'ajout de la commission');
            }
          })
          .catch(error => console.error('Erreur lors de la requête fetch:', error));
      };

	useEffect(() => {
        pourcentage()
	  }, []);

	
	return(
        <div>
		<div style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08)",padding:"20px",marginLeft:"30%",marginRight:"auto",borderRadius:"10px",width:"40%",backgroundColor:"white",alignContent:"center",justifyContent:"center"}}>
		<CRow>
		<CCol md={12} className="mb-4">
			<CRow>
				<CCol>
                    <center><h3>Votre commission</h3></center>
                    <hr/>
                <CWidgetStatsA 
                    style={{ border:"none"}}
                        className="mb-4"
                        color="danger"
                        value={valeur !== null ? valeur+"%" : 'Chargement...'}
						title="du prix de vente"
                        chart={
                            <CChartBar
                            className="mt-3 mx-3"
                            style={{ height: '70px' }}
                            data={{
                                labels: [
                                'January',
                                'February',
                                'March',
                                'April',
                                'May',
                                'June',
                                'July',
                                'August',
                                'September',
                                'October',
                                'November',
                                'December',
                                'January',
                                'February',
                                'March',
                                'April',
                                ],
                                datasets: [
                                {
                                    label: 'My First dataset',
                                    backgroundColor: 'rgba(255,255,255,.2)',
                                    borderColor: 'rgba(255,255,255,.55)',
                                    data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                                    barPercentage: 0.6,
                                },
                                ],
                            }}
                            options={{
                                maintainAspectRatio: false,
                                plugins: {
                                legend: {
                                    display: false,
                                },
                                },
                                scales: {
                                x: {
                                    grid: {
                                    display: false,
                                    drawTicks: false,
                                    },
                                    ticks: {
                                    display: false,
                                    },
                                },
                                y: {
                                    grid: {
                                    display: false,
                                    drawBorder: false,
                                    drawTicks: false,
                                    },
                                    ticks: {
                                    display: false,
                                    },
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
        </div>
        <div  style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08)",marginTop:"30px",padding:"20px",marginLeft:"30%",marginRight:"auto",borderRadius:"10px",width:"40%",backgroundColor:"white"}}>
        <CRow>
        <CCol >
        <CForm>
            <div>
                <CFormLabel>Mettre à jour la valeure de la commission</CFormLabel>
                <CFormInput type="text" onChange={(event) => handleChange(event)} id="nom" placeholder="Insérez une nouvelle valeur...."/>
            </div>

            <CButton type="button" onClick={handleAjout} className="my-3" style={{ backgroundColor:"#DAAB3A",border:"none" }}>
                Ajouter
            </CButton>
        </CForm>
		</CCol>
		</CRow>
	</div>
	</div>
	);
};

export default Commission;