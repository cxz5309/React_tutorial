import { formatRelativeDate } from './js/helpers.js';
import store from './js/store.js'

const TabType = {
  KEYWORD: 'KEYWORD',
  HSITORY: 'HISTORY'
}

const TabLabel = {
  [TabType.KEYWORD]: '추천 검색어',
  [TabType.HSITORY]: '최근 검색어',
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: '',
      searchResult: [],
      submitted: false,
      selectedTab: TabType.KEYWORD,
      keywordList: [],
      historyList: [],
    }
  }

  componentDidMount() {
    const keywordList = store.getKeywordList();
    const historyList = store.getHistoryList();

    this.setState({ keywordList, historyList });
  }

  handleChangeInput(event) {
    // this.state.searchKeyword = event.target.value;
    // this.forceUpdate();
    const searchKeyword = event.target.value;
    if (searchKeyword.length <= 0 && this.state.submitted) {
      return this.handleReset();
    }
    this.setState({
      searchKeyword: searchKeyword,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit', this.state.searchKeyword);
    this.search(this.state.searchKeyword);
  }

  search(searchKeyword) {
    const searchResult = store.search(searchKeyword);
    const historyList = store.getHistoryList();

    this.setState({
      searchKeyword,
      searchResult,
      submitted: true,
      historyList
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        searchKeyword: '',
        submitted: false,
      }
    }, () => {
      console.log('handleReset', this.state.searchKeyword);
    })
  }

  handleClickRemoveHistory(event, keyword) {
    event.stopPropagation();
    store.removeHistory(keyword);
    const historyList = store.getHistoryList();
    this.setState({ historyList })
  }

  render() {
    const searchForm = (
      <form
        id="search-form-view"
        onSubmit={event => this.handleSubmit(event)}
        onReset={() => this.handleReset()}
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
      </form>
    )
    const searchResult = (
      this.state.searchResult.length > 0 ?
        (<ul className='result'>
          {this.state.searchResult.map(item => {
            return (
              <li key={item.id}>
                <img src={item.imageUrl} alt={item.name} />
                <p>{item.name}</p>
              </li>
            )
          })}
        </ul>)
        : (<div> 검색 결과가 없습니다.</div>)
    )

    const keywordList = (
      <ul className="list">
        {this.state.keywordList.map(({ id, keyword }, index) => {
          return (
            <li key={id} onClick={() => this.search(keyword)}>
              <span className='numeber'>{index + 1}</span>
              <span>{keyword}</span>
            </li>
          )
        })}
      </ul>
    )

    const historyList = (
      <ul className='list'>
        {this.state.historyList.map(({ id, keyword, date }) => {
          return (
            <li key={id} onClick={() => this.search(keyword)}>
              <span>{keyword}</span>
              <span className='date'>{formatRelativeDate(date)}</span>
              <button className='btn-remove'
                onClick={event => this.handleClickRemoveHistory(event, keyword)}></button>
            </li>
          )
        })}
      </ul>
    )

    const tabs = (
      <>
        <ul className='tabs'>
          {Object.values(TabType).map(tabType => {
            return (
              <li className={this.state.selectedTab === tabType
                ? 'active'
                : ''}
                key={tabType}
                onClick={() => this.setState({ selectedTab: tabType })}
              >
                {TabLabel[tabType]}
              </li>
            )
          })}
        </ul>
        {this.state.selectedTab === TabType.KEYWORD && keywordList}
        {this.state.selectedTab === TabType.HSITORY && historyList}
      </>
    )
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          {searchForm}
          <div className="content">
            {this.state.submitted
              ? searchResult
              : tabs}
          </div>
        </div>
      </>
    );
  }
}


ReactDOM.render(<App />, document.querySelector("#app")) // 7
