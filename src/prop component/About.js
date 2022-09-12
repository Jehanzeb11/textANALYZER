import React from 'react'

function About(props) {
  const mst = {
      color :props.mode === "dark"? "white" : "rgb(25 32 58)",
    backgroundColor : props.mode ==="dark"?"rgb(25 32 58)": "white"}
    
  return (
    <>
    
<h1>About Us</h1>

     <div className="accordion container mt-5" id="accordionExample">
  <div className="card" style={mst}>
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mst}>
          About
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body" >
      Figure Out Everything Your Page Will Include      </div>
    </div>
  </div>
  <div className="card" style={mst}>
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
        <button className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mst}>
          Community
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
Our community helps to make better work experience
      </div>
    </div>
  </div>
  <div className="card" style={mst}>
    <div className="card-header" id="headingThree">
      <h2 className="mb-0">
        <button className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mst}>
          davelopment
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
      The 3 kinds of developments are: Complying; • Merit; and • Non-Complying. Each of the different kinds of development has a different assessment process.
      </div>
    </div>
  </div>
</div> 
    </>
  )
}

export default About
