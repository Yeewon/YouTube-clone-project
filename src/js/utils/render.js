import { chipItemTemplate } from '../templates/chipItem.js';
import { searchedVideoListTemplate } from '../templates/searchedVideo.js';
import { miniSidebarTemplate, sidebarTemplate } from '../templates/sidebar.js';
import {
  miniSearchTemplate,
  searchSubmitTemplate,
  startTemplate,
  userContainerTemplate,
  voiceRecordTemplate,
} from '../templates/main.js';
import { $ } from './DOM.js';

export const renderSearchedVideo = videos => {
  $('.videos').innerHTML = '';
  videos.map(video => {
    $('.videos').insertAdjacentHTML(
      'beforeend',
      searchedVideoListTemplate(video),
    );
  });
};

export const renderChipItems = () => {
  $('.chip-list').innerHTML = chipItemTemplate();
};

export const renderSidebar = () => {
  $('.sidebar').innerHTML = sidebarTemplate();
};

export const renderMiniSidebar = () => {
  $('.mini-sidebar').innerHTML = miniSidebarTemplate();
};

export const renderMainTemplates = () => {
  $('.start').innerHTML = startTemplate();
  $('.mini-search').innerHTML = miniSearchTemplate();
  $('.video-search-submit-icon').innerHTML = searchSubmitTemplate();
  $('.voice-record-container').innerHTML = voiceRecordTemplate();
  $('.user').innerHTML = userContainerTemplate();
};
