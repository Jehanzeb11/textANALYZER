import React from 'react'

function Alert(prop) {
  return (
 <div style={{height:"25px"}}>

    {prop.alert &&   
      <div class="alert alert-primary alert-dismissible fade show" role="alert">
  <strong>{prop.alert.type}</strong> : {prop.alert.mesg}
    
</div>}
 </div>
    
  )
}

export default Alert
