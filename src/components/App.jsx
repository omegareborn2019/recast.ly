import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.options = {
      key: 'AIzaSyAIfUdjOp31WGYNK9n-nSxJ-EmEc_Db8LY', query: 'potato', max: 5
    };
    this.state = { data: exampleVideoData, current: exampleVideoData[0] };
    this.onListItemClick = this.onListItemClick.bind(this);
    this.init();
  }

  onListItemClick(event) {
    this.setState({ current: this.state.data[event.target.id] });
  }

  init() {
    this.props.searchYouTube(this.options, (data) => { this.setState({ data: data, current: data[0] }); });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.current} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.data} onClick={this.onListItemClick} /></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
