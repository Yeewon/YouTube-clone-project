import { $ } from '../utils/DOM.js';
export default function Sidebar({ onSidebar }) {
  $('.menu').addEventListener('click', () => {
    onSidebar();
  });
}
