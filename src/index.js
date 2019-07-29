// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import exampleVideoData from './data/exampleVideoData.js';

// import VideoList from './components/VideoList.jsx';

ReactDOM.render(<App />, document.getElementById("app"));
console.log(exampleVideoData);
// ReactDOM.render(<VideoList />, document.getElementsByClassName("col-md-5"));