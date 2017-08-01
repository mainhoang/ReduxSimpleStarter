import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyCBI_odMYXiRUWXC1gQTNwwJJpcTCk8n1g';

// Create a new component
// This component should produce some HTML

const App = () => {
    return <div>Hi!</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));
// Take this component's generated HTML & put it on the page (in the DOM)
