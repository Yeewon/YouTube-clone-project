import { $ } from '../utils/DOM.js';
export default function SearchVideo({ onKeywordInput }) {
  $('.video-search-form').addEventListener('submit', e => {
    e.preventDefault();
    const keyword = $('.video-search-input').value;
    onKeywordInput(keyword);
  });
}
