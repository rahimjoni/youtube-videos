import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar";
import 'semantic-ui-css/semantic.min.css';
import youtube from './components/YoutubeAPI';
import VideoList from './components/VideoList';
import VideoDetails from "./components/VideoDetails";
const KEY = 'AIzaSyC8WV9ZeRzgl6TAPwn03uBAcjWref42_Tk'

class App extends Component {
    state = {
        videos :[],
        videoSelect:null
    }
    componentDidMount() {
        this.onTermSubmit('cars')
    }

    onTermSubmit =async (term)=>{
        const response= await youtube.get('/search',{
            params:{
                q: term,
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                key: KEY,
            }
        });

        this.setState({videos:response.data.items, videoSelect:response.data.items[0]})
    }
    onVideoSelect = (video)=>{
        this.setState({videoSelect:video})
    }

    render() {
        return (
            <div className="App ui container">
                <SearchBar submitInput={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.videoSelect}></VideoDetails>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
