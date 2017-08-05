import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCBI_odMYXiRUWXC1gQTNwwJJpcTCk8n1g';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selected: null
        };

        this.videoSearch('french bulldog');
    }

    videoSearch(term){
        // NOTE: Properties 'key' & 'term' are query parameters used to query YouTube API
        YTSearch({key: API_KEY, term: term}, (videos) => {
            // Same as: this.setState({videos: videos});
            this.setState({
                videos: videos,
                selected: videos[0]
            });
            console.log(videos);
        });
    }

    render(){

        const slowedSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onTermChange={slowedSearch} />
                <VideoDetail selected={this.state.selected} />
                <VideoList
                    onSelect={selected => this.setState({selected})}
                    videos={this.state.videos} />
            </div>
        );
    }
}
// Take this component's generated HTML & put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));// Take this component's generated HTML & put it on the page (in the DOM)
