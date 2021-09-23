import SearchVideo from './handlers/SearchVideo.js';
import { request } from './utils/api.js';
import { getLocalStorage, setLocalStorage } from './utils/localStorage.js';
import {
  renderChipItems,
  renderMiniSidebar,
  renderSearchedVideo,
  renderSidebar,
  renderMainTemplates,
} from './utils/render.js';
import Sidebar from './handlers/Sidebar.js';
import { $ } from './utils/DOM.js';
import { videoSkeletonTemplate } from './templates/videoSkeleton.js';
import { FETCH_VIDEO_COUNT } from './constants/api.js';
import { TEMP_VIDEO_INFO } from './constants/youtube.js';
import { firstPageTemplate } from './templates/firstPage.js';
import { searchNotFoundTemplate } from './templates/searchNotFound.js';

export default function App({ $target }) {
  this.state = {
    keyword: '',
    searchedVideoInfos: getLocalStorage(TEMP_VIDEO_INFO),
  };

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    renderMainTemplates();
    if (!this.state.searchedVideoInfos) {
      $('.videos').innerHTML = firstPageTemplate();
    } else {
      renderSearchedVideo(this.state.searchedVideoInfos);
    }
    renderChipItems();
    renderSidebar();
    renderMiniSidebar();
  };

  this.render();

  new SearchVideo({
    onKeywordInput: async keyword => {
      $('.videos').innerHTML =
        videoSkeletonTemplate().repeat(FETCH_VIDEO_COUNT);
      const { items } = await request(keyword);
      if (items.length === 0) {
        $('.videos').innerHTML = searchNotFoundTemplate();
      } else {
        setLocalStorage(TEMP_VIDEO_INFO, items);
        this.setState({
          ...this.state,
          keyword,
          searchedVideoInfos: items,
        });
      }
    },
  });

  new Sidebar({
    onSidebar: () => {
      if ($('.menu').classList.contains('opened')) {
        $('.sidebar').style = 'display: none';
        $('.mini-sidebar').style = 'display: flex';
        $('.menu').classList.remove('opened');
      } else {
        $('.sidebar').style.display = 'flex';
        $('.mini-sidebar').style = 'display: none';
        $('.menu').classList.add('opened');
      }
    },
  });
}
