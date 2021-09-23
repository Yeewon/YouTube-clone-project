import { formatDate } from '../utils/date.js';

export const searchedVideoListTemplate = ({ id, snippet }) => {
  const date = formatDate(snippet.publishTime);

  return `<div class="searched-video" data-video-id="${id.videoId}" data-title="${snippet.title}" data-channel-id="${snippet.channelId}" data-channel-title="${snippet.channelTitle}" data-publish-time="${snippet.publishTime}">
                <div class="preview-container">
                   <iframe class="preview-video" src="https://www.youtube.com/embed/${id.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                </div>
                <div class="content-container">
                    <div class="video-title">${snippet.title}</div>
                    <div class="video-detail">
                        <a href="https://www.youtube.com/channel/${snippet.channelId}" target="_blank" style="text-decoration: none; color: gray">
                        ${snippet.channelTitle}
                        </a>
                        <div class="meta">
                           <p>${date}</p>
                        </div>
                    </div>
                </div>
            </div>`;
};
