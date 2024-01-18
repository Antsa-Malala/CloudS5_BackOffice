import { React, useEffect, useState, useRef } from 'react'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormLabel,
  CFormInput,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import ToastNotification from '../notification/ToastNotification'

// Okey manao page indray eto

const Ajout = ( props ) =>{
  let [ nom, setNom ] = useState(null);
  const[ value, setValue ] = useState("");
  const[ toasts, setToasts ] = useState(0);
  const toaster = useRef();
  const [toast, setToast] = useState( null );
  const handleChange = ( event ) => {
    setValue( event.target.value );
  };

  const handleAjout = (event,  endpoint ) => {
    event.preventDefault();
    let xhttp = new XMLHttpRequest();
    
    let url = process.env.REACT_APP_API_URL + endpoint;
    
    let data = {
    };
    data[props.nom] = value;

    xhttp.onreadystatechange = function(){
      if( this.readyState === 4 ){
        if( this.status === 201 ){
          let response = JSON.parse(this.responseText);
          
          // Ovaina
          let message = response.remarque;
          //let save = message.save;
          setToast( <ToastNotification ref = {toaster} push={ toasts } message = {message} /> )


        }
      }
    };

    xhttp.open("POST" , url, true );
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send( JSON.stringify(data) );
  };

  return(
    <CForm>
      <div className="my-3 col-6" >
        <CFormLabel htmlFor="nom"> { props.title }  </CFormLabel>
        <CFormInput type="text" onChange={handleChange} id="nom" placeholder="...." />
        <CButton type="button" onClick={ (event) => handleAjout( event, props.endpoint, props.nom ) } className="my-3"> Ajouter </CButton>
        { toast }
      </div>
    </CForm>
  );

};

export default Ajout;