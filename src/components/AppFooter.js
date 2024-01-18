import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          IT University
        </a>
        <span className="ms-1">&copy; </span>
      </div>
      <div className="ms-auto">
        <span className="me-1"></span>
        <a href="" target="_blank" rel="">
          projet cloud
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
