import { CHIP_LIST } from '../constants/youtube.js';

export const chipItemTemplate = () => {
  return `
    ${CHIP_LIST.map(
      chip_item => `<div class="chip-item">${chip_item}</div>`,
    ).join('')}`;
};
