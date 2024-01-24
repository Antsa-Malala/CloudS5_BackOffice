import { React } from 'react'
import {
  CToast,
  CToastBody,
  CToastClose,
} from '@coreui/react'



const ToastNotification = ( { message, ref, push } ) =>{
	return (
		<CToast ref={ref} push = {push} animation={false} className="align-items-center" autohide={true} visible={true} >
      <div className="d-flex">
  		  <CToastBody>
  		  		{ message }
  		  </CToastBody>
        <CToastClose className="me-2 m-auto" />
      </div>
		</CToast>
	);
};

export default ToastNotification;