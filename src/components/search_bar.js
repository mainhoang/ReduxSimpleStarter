import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props){
        // Calling super gives your component methods that are properties of Component from 'react' (?)
        super(props);
        this.state = {searchTerm: 'boogers'};
    }

    render(){
        // 'onChange' is a react property
        return (
            <div className='search-bar'>
                <input
                    value={this.state.searchTerm}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term){
        this.setState({searchTerm: term});
        this.props.onTermChange(term);
    }

}



export default SearchBar;