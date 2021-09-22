import { chipItemTemplate } from '../templates/chipItem.js';
import { searchedVideoListTemplate } from '../templates/searchedVideo.js';
import { miniSidebarTemplate, sidebarTemplate } from '../templates/sidebar.js';
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
