import React from 'react';
import { styles } from './Styles';




function Footer() {

    return (
       // <div className=' navbar-light bg-dark text-white-50' id = 'footer'>


            <div className='container-fluid bg-dark text-white-50' id = 'footer'>

                <div className = 'row'>

                    <h3 className = 'col-4 text-center h1' style={{styles}}>Stellas</h3>

                    <h5 className = 'col-4 text-center h2'>8334 W. Trusel Avenue Spring Valley, CA 91977</h5>

                    <h5 className = 'col-4 text-center h4'> Monday-Thursday <br /> 
                    10:45-10PM      <br />
                    Friday & Saturday <br />
                    10:45-11PM
                
                </h5>

                </div>

            </div>

       // </div>
    )

}

export default Footer;