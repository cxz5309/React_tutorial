class SearchFrotm extends React.Component{
  constructor(){
    super();

    this.state={
      wearchKeyword: "",
    }
  }

  render(){
    return (<form>
      
      <input type="text" 
      placeholder="검색어를 입력하세요" 
      autofocus
      value={this.state.searchKeyword{
        onchange={(event)=> this.handleChangeInput(event)}
        />
        {this.state.searchKeyword.length>0 && {
          <button type="reset" class="btn-reset"></button>
        }}
        </form>
      }
      );>
  }
}