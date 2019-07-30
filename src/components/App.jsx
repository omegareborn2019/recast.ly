import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  onListItemClick(event) {
    console.log(event.target);
    ReactDOM.render(<VideoPlayer video={exampleVideoData[1]} />, document.getElementsByClassName("col-md-7")[0]);
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
            <div><VideoPlayer video={exampleVideoData[0]} /></div>
          </div>
          <div className="col-md-5">
            <div onClick={this.onListItemClick.bind(this)}><VideoList videos={exampleVideoData} /></div>
          </div>
        </div>
      </div>
    );
  }
}



// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>Search</em><Search /></h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>VideoPlayer</em><VideoPlayer video={exampleVideoData[0]} /></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>VideoList</em><VideoList videos={exampleVideoData} /></h5></div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
