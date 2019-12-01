import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    input: ''
  }

  onChange = (e) => {
    this.setState({
      input: e.target.value,
    })
  }

  onFormSubmit = (e) => {
    const { onFormSubmit } = this.props;
    const { input } = this.state;
    e.preventDefault();
    onFormSubmit(input)

  }

  render() {
    const { input } = this.state;
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video search</label>
            <input type="text" value={input} onChange={this.onChange} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;