import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css'

class SearchBar extends Component {
    state = {
        term:''
    }
    changeInput =(event)=>{
        this.setState({term:event.target.value})
    }
    submitInput = (event) =>{
        event.preventDefault()
        this.props.submitInput(this.state.term)
}

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.submitInput}>
                    <div className="field">
                        <label>Search</label>
                        <input type="text" value={this.state.term} onChange={this.changeInput}></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;