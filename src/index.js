import React,{Component} from 'react';  
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCAqJv8Ct3eXxOp_pWWnGh0iwHlggis6Qo';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos : [],
            videoSelected : null
        };
        this.videoSelected = this.videoSelected.bind(this);
        this.searchYouTube = this.searchYouTube.bind(this);
        this.searchYouTube('hello');
        
    }
    

    searchYouTube(term){
        YTSearch({key:API_KEY,term:term},videos => {
            this.setState({
                videos:videos,
                videoSelected : videos[0]
            });
        });
    }

    render(){  
        const delayedVideoSearch =  _.debounce(this.searchYouTube,3000);
        return(
        <div>
            <SearchBar onSearchChange={delayedVideoSearch}/>
            <VideoDetail video={this.state.videoSelected}/>
            <VideoList videos={this.state.videos} videoSelected={this.videoSelected}/>
        </div>
        );
    }
    videoSelected(video){
        this.setState({videoSelected:video});
    }
} 

ReactDOM.render(<App/>,document.querySelector('.container'));