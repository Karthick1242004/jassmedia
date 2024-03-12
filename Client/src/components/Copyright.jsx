import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright} from "@fortawesome/free-solid-svg-icons";
import './Copyright.css'
const Copyright = () => {
  return (
    <>
    <div className="copyrights">
      <p> Copyright <FontAwesomeIcon icon={faCopyright} /> Developed by TAS INNOVATIONS. All rights reserved</p>
      </div>
    </>
  )
}

export default Copyright
