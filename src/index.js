import React from 'react';
import ReactDOM from 'react-dom';
import Restaurant from './Restaurant';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import GoogleFontLoader from 'react-google-font-loader';

class App extends React.Component {

    render() {

        return (



            <React.Fragment>
                <GoogleFontLoader
                    fonts={[
                        {
                            font: 'Dancing Script',
                            weights: [400, '100i'],
                        },
                        {
                            font: 'Roboto Mono',
                            weights: [400, 700],
                        },
                    ]}
                    subsets={['cyrillic-ext', 'greek']}
                />

                <Restaurant />

            </React.Fragment>



        );
    }

}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();