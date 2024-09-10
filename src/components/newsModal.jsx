import React from "react";
import './newsModal.css'
const NewsModal = ({show, article, onClose}) => {
    if (!show) return null;
    return (
        <div className="modal-popup">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>
                    <i className="fa-solid fa-xmark"></i>
                </span>
                {article && (
                <>
                    <img src={article.image} alt={article.title} className="modal-image" />
                    <h2 className="modal-title">{article.title}</h2>
                    <p className="modal-source">Source: {article.source.name}</p>
                    <p className="modal-content-text">{article.content}</p>
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="read-more-link"
                    >
                    Read More
                    </a>
                </>
                )}
            </div>
        </div>
    )
}

export default NewsModal;