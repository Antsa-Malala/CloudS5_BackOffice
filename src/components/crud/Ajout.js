import { React, useEffect, useState, useRef } from 'react'
import {
  CButton,
  CForm,
  CFormLabel,
  CFormInput,
} from '@coreui/react'

import ToastNotification from '../notification/ToastNotification'

// Okey manao page indray eto

const Ajout = ( props ) =>{
  const[ value, setValue ] = useState("");
  const[ toasts, setToasts ] = useState(0);
  const toaster = useRef();
  const [showToast, setShowToast] = useState(false);
  const [toast, setToast] = useState( null );
  const handleChange = ( event ) => {
    setValue( event.target.value );
  };
  const token = localStorage.getItem('token');

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
          setShowToast(true);

        }
      }
    };

    xhttp.open("POST" , url, true );
    xhttp.setRequestHeader('Authorization', `Bearer ${token}`);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send( JSON.stringify(data) );
  };

  useEffect(() => {
    if (showToast) {
      window.location.href = "#" + props.endpoint;
    }
  }, [showToast]);

  return(
    <CForm>
      <div className="my-3 col-6" >
        <CFormLabel htmlFor="nom"> { props.title }  </CFormLabel>
        <CFormInput type="text" onChange={handleChange} id="nom" />
        <CButton type="button" onClick={ (event) => handleAjout( event, props.endpoint, props.nom ) } className="my-3"> Ajouter </CButton>
        { toast }
      </div>
    </CForm>
  );

};

export default Ajout;