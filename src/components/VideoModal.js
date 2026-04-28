import React from 'react';
import './VideoModal.css';
import { FaTimes } from 'react-icons/fa';

const VideoModal = ({ show, onClose, videoId, title, description }) => {
  if (!show) {
    return null;
  }

  const defaultVideoId = videoId || "XQg009mDWag";
  const videoSrc = `https://www.youtube.com/embed/${defaultVideoId}?autoplay=1&loop=1&playlist=${defaultVideoId}`;

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="video-close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="video-responsive-container">
          <iframe
            width="100%"
            height="100%"
            src={videoSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        {(title || description) && (
          <div className="video-info-section">
            {title && <h3>{title}</h3>}
            {description && <p>{description}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoModal;