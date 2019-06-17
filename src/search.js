import React from "react";
import ReactDOM from "react-dom";
import cat from './images/cat.jpg'
import './search.less'

class Search extends React.Component {
    render() {
        return (
            <div>
                <p className="normal-text">normal text</p>
                <p  className="search-text">search page!!!</p>
                <img src={ cat } />
            </div>
        );
    }
}

ReactDOM.render(<Search />, document.getElementById("root"));