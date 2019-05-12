import React from 'react';
import Index from "./pages/index";
import './index.css'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>1234</h3>
                <Index data={[{text: 'hello'}]}/>
                <h3>21</h3>
            </div>
        )
    }
}


export default App;
