import { React, useEffect, useState, useRef } from 'react'
import {
  CButton,
  CForm,
  CFormLabel,
  CFormInput,
  CAlert
} from '@coreui/react'


const Modify = ( props ) => {
  let [ nom, setNom ] = useState(null);
  const[ value, setValue ] = useState("");
  const[ id, setId ] = useState(0);
  const toaster = useRef();
  const[ erreur, setErreur] = useState("");
  const [toast, setToast] = useState( null );
  const handleChange = ( event ) => {
    setValue( event.target.value );
  };
  const token = localStorage.getItem('token');

  const handleUpdate = ( endpoint ) => {

    let xhttp = new XMLHttpRequest();
    let url = process.env.REACT_APP_API_URL + endpoint + "/" + id;
    let data = {};
    data[nom] = value;

    xhttp.onreadystatechange = function(){
      if( this.readyState === 4 ){
        if( this.status === 200 ){

          let response = JSON.parse(this.responseText);
          let message = response.remarque;
          let save = message.save;
          let data = response.data;
          console.log(data);
          window.location.href="#"+endpoint;
        }
        else {
          console.error("Error during insertion");
          setErreur("Erreur lors de la modification");
        }
      }
    };

    xhttp.open("PUT" , url, true );
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader('Authorization', `Bearer ${token}`);
    xhttp.send( JSON.stringify(data) );
  };

  useEffect(() => {
    if (erreur) {
      const timeoutId = setTimeout(() => {
        setErreur("");
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [erreur]);

  const getItems = ( id_value, endpoint, nomColonne ) => {
    let xhttp = new XMLHttpRequest();
    let url = process.env.REACT_APP_API_URL + endpoint + "/" + id_value;
    console.log(url);
    xhttp.onreadystatechange = function(){
      if( this.readyState === 4 ){
        if( this.status === 200 ){
          let response = JSON.parse( this.responseText );
          let data = response.data;
          setValue( data[nomColonne] );
        }
      }
    };

    xhttp.open("GET" , url, true);
    xhttp.setRequestHeader('Authorization', `Bearer ${token}`);
    xhttp.send();
  };

  useEffect( () => {
   setNom( props.nom);
    getItems(props.id, props.endpoint, props.nom);
    setId( props.id );
  }, [] );

  return (
    <CForm style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08)",marginTop:"30px",padding:"20px",marginLeft:"30%",marginRight:"auto",borderRadius:"10px",width:"35%",backgroundColor:"white"}}>
      <div>
      {erreur && (
            <CAlert color="danger">
              {erreur}
            </CAlert>
          )}
        <CFormLabel htmlFor="nom"> { props.title }  </CFormLabel>
        <CFormInput type="text" onChange={handleChange} value={ value } id="nom" placeholder="...." />
        <CButton type="button" onClick={ () => handleUpdate( props.endpoint ) } className="my-3" style={{ backgroundColor:"#DAAB3A",border:"none" }}> Modifier </CButton>
        { toast }
      </div>
    </CForm>
  );

};

export default Modify;