import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  CToast,
  CToastBody,
} from '@coreui/react'
import { cilLockLocked, cilUser } from '@coreui/icons'

  const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const connection = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "/auth/signin";
  
      const userData = {
        email: email,
        password: password,
      };
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        connected(data.token);
      } else {
        console.error('Erreur lors de la requête :', response.status);
        showToast('Identifiant ou mot de passe incorrect. Vérifiez et réessayez.');
      }
    } catch (error) {
      console.error('Erreur inattendue :', error);
    }
  };
  

  const connected = async (userToken) => {
    try {
      const url = process.env.REACT_APP_API_URL + "/utilisateurs/connecte";

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        
        if (data.data.role === 1) {
          window.location.href = "#/dashboard";
        } else {
          console.error('Cette application est réservée pour les administrateurs', 403);
          showToast('Cette application est uniquement pour les administrateurs.');
        }
      } else {
        console.error('Erreur lors de la requête :', response.status);
      }
    } catch (error) {
      console.error('Erreur inattendue :', error);
    }
  };
  const showToast = (message) => {
    const toaster = document.getElementById('toaster');
  
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.color = 'red';
    toast.style.padding = '5px';
    toast.style.margin = '10px';
  
    toaster.appendChild(toast);
  
    setTimeout(() => {
      toaster.removeChild(toast);
    }, 3000);
  };
  
  
  


  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
                    <div id="toaster" className="toast-container"></div>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Connexion</h1>
                    <p className="text-medium-emphasis">Connectez-vous</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput 
                      placeholder="Email" 
                      autoComplete="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Mot de passe"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton className="px-4" type="button"
                        onClick={connection} style={{backgroundColor:"#475465",color:"white",border:"none"}}>
                            Se connecter
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white py-5" style={{ width: '44%',backgroundColor:"#475465" }}>
                <CCardBody className="text-center"  style={{backgroundColor:"#475465",border:"none"}}>
                  <div>
                    <h2>Car&apos;Okaz</h2>
                    <p>
                    Bienvenue dans l&apos;espace de gestion en backoffice, où vous avez le pouvoir total de modeler et de perfectionner chaque élément de votre site selon vos besoins.
                    </p>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
