import React from 'react';

export default class SearchForm extends React.Component{
  constructor(){
    super();
    console.log(123123123);
    this.state={
      searchKeyword: "",
    }
  }

  handleChangeInput(event){
    const searchKeyword = event.target.value;
    this.setState({searchKeyword});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.searchKeyword);
  }

  render(){
    return (
    <form
      onSubmit={(event)=>this.handleSubmit(event)}
      onReset={()=>this.handleReset()}
    >
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        autoFocus
        value={this.state.searchKeyword}
        onChange={event => this.handleChangeInput(event)}
      />
      {this.state.searchKeyword.length > 0 && (
        <button type="reset" className="btn-reset"></button>
      )}
    </form>)
  }
}