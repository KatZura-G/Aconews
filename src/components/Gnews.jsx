import React, { useState, useEffect } from 'react'
import techNewsImg from '../assets/techNewsImg.jpeg'
import businessNewsImg from '../assets/businessNews.jpeg'
import entertainmentNewsImg from '../assets/entertainmentNews.jpeg'
import politicsNewsImg from '../assets/politicsNews.jpeg'
import scienceNewsImg from '../assets/scienceNews.jpeg'
import sportsNewsImg from '../assets/sportsNews.jpeg'
import worldNewsImg from '../assets/worldNews.jpeg'
import './Gnews.css';
import axios from 'axios';
import NewsModal from './newsModal'

const categories = ['general', 'world', 'business', 'technology', 'entertainment', 'sports', 'science', 'health', 'nation']
const Gnews = () => {
    const [news, setNews] = useState([]);
    const [title, setTitle] = useState(null);
    const [currentCategory, setCurrentCategory] = useState('general');
    const [showModal, setShowModal] = useState(false);
    const [currentArticle, setCurrentArticle] = useState(null);
    useEffect(() => {
        const api_key = 'ebfeea240479b989a22349f6a860bea4'
        const fetchNews = async() =>{
            const url = 'https://gnews.io/api/v4/top-headlines?category=' + currentCategory + '&lang=en&country=us&max=10&apikey=' + api_key
            const response = await axios.get(url)
            const fetchedNews = response.data.articles
            setTitle(fetchedNews[0])
            setNews(fetchedNews.slice(1, 7))
        }
        fetchNews()
    }, [currentCategory])

    const categoryClickHandler = (e, category) => {
        e.preventDefault();
        setCurrentCategory(category)
    }

    const articleClickHandler = (article) => {
        setCurrentArticle(article)
        setShowModal(true)
        console.log(article)
    }
    return (
        <div className='gnews'>
            <div className="header">
                <h1 className="logo">aconews</h1>
            </div>
            <div className="content">
                <nav className="side-bar">
                    <h1 className='nav-heading'>Categories</h1>
                    <div className="categories">
                        {categories.map((category) => {
                            return <a href="#" className="nav-link" key={category} onClick={(e) => categoryClickHandler(e, category)}>{category}</a>
                        })}
                    </div>
                </nav>
                <div className="sections">
                    {title && (
                    <div className="news-title" onClick={() => articleClickHandler(title)}>
                        <img src={title.image} alt="title-image" />
                        <h2 className='news-subtitle'>{title.title}</h2>
                    </div>
                    )}
                    <div className="news-cards-container">
                        {news.map((article, index) => (
                            <div className="news-cards" key={index} onClick={() => articleClickHandler(article)}>
                            <img src={article.image} alt={article.title} />
                            <h3>{article.title}</h3>
                        </div>
                        ))}
                    </div>
                </div>
                <NewsModal show={showModal} article={currentArticle} onClose={() => setShowModal(false)}/>
            </div>
        </div>
    )
}

export default Gnews;