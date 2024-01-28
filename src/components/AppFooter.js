import React from 'react'
import CIcon from '@coreui/icons-react'
import {  cilCloudy } from '@coreui/icons'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ms-1">&copy; IT University</span>
      </div>
      <div className="mfs-auto">
      <CIcon icon={cilCloudy}/>
       <span> Cloud Project</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
