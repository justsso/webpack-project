import React from 'react';
import './index.less';
import JackImg from '../images/jack.png';

function Index(props) {
    return (
        <div>I am Index Page
            {
                props.data[0].text
            }
            <p>
                <img src={JackImg} alt=""/>
            </p>
        </div>
    )
}

export default Index;
