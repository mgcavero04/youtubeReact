import React from 'react';

class SearchBar extends React.Component {
  state={term:''};
  onInputChange= event =>{
      this.setState({term: event.target.value});
  }
  onFormSubmit=event => {//when clicking <enter>
      event.preventDefault();//do not reflesh the entere page
      //call callback from parent component(App.js)
      this.props.onFormSubmit(this.state.term);
  }
  render() {
    return (
    <div className="seach-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
                <label>Video Search</label>
                <input 
                type="text" 
                value={this.state.term} 
                onChange={this.onInputChange}
                />
            </div>
        </form>
    </div>
    );
  }
}

export default SearchBar;
