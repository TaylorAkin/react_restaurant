import React from 'react';





function Footer() {

    return (

  
            <React.Fragment>

        <div className='container-fluid' id='footer'>

            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title display-4">Stellas</h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Location</h2>
                            <p className="card-text">Taylor St & Jefferson St, San Francisco, CA 94133</p>
                           
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 text-center">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Hours</h2>
                            <p className="card-text">Monday-Thursday <br />
                        10:45-10PM      <br />
                        Friday & Saturday <br />
                        10:45-11P</p>
                        
                        </div>
                    </div>
                </div>
            </div>

        </div>

            </React.Fragment>

     

      
    )

}

export default Footer;