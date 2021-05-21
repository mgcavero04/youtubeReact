import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state={videos:[], selectedVideo: null};
  componentDidMount(){
    this.onTermSubmit('python');
  }
  
  onTermSubmit = async term => {//callback
    //call pre-configured instance of axios
    const response=await youtube.get('/search', {//api request
      params:{
        q:term
      }
     
    });
   this.setState({//set to show first video as default
       videos: response.data.items,
       selectedVideo: response.data.items[0]

    
    });
  };
  onVideoSelect = video => {//callback arrow function...to add as a prop(parent to child)
    this.setState({selectedVideo: video});
  };




  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
