import { React, useEffect, useState, useRef } from 'react'
import {
  CButton,
  CForm,
  CFormLabel,
  CFormInput,
  CAlert
} from '@coreui/react'

import ToastNotification from '../notification/ToastNotification'

// Okey manao page indray eto

const Ajout = ( props ) =>{
  const[ value, setValue ] = useState("");
  const[ toasts, setToasts ] = useState(0);
  const toaster = useRef();
  const [showToast, setShowToast] = useState(false);
  const [toast, setToast] = useState( null );
  const[ erreur, setErreur] = useState("");
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

    xhttp.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 201) {
          let response = JSON.parse(this.responseText);
          let message = response.remarque;
          setToast(<ToastNotification ref={toaster} push={toasts} message={message} />);
          setShowToast(true);
        } else {
          console.error("Error during insertion");
          setErreur("Erreur lors de l'insertion");
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
  useEffect(() => {
    if (erreur) {
      const timeoutId = setTimeout(() => {
        setErreur("");
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [erreur]);

  return(
    <CForm style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08)",marginTop:"30px",padding:"20px",marginLeft:"30%",marginRight:"auto",borderRadius:"10px",width:"35%",backgroundColor:"white"}}>
      <div >
        {erreur && (
            <CAlert color="danger">
              {erreur}
            </CAlert>
          )}
        <CFormLabel htmlFor="nom"> { props.title }  </CFormLabel>
        <CFormInput type="text" onChange={handleChange} id="nom" placeholder='Inserer une nouvelle valeure....'/>
        <CButton type="button" onClick={ (event) => handleAjout( event, props.endpoint, props.nom ) } className="my-3" style={{ backgroundColor:"#DAAB3A",border:"none" }}> Ajouter </CButton>
        { toast }
      </div>
    </CForm>
  );

};

export default Ajout;