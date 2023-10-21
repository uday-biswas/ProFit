import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import Footer from './Footer';
import Loader from './Loader';

const Blog = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_31568580c01691006c76e5ac141c3687874cf&q=fitness&language=en&category=food,health`
      );

      if (response.ok) {
        const data = await response.json();
        setNewsData(data.results);
      } else {
        console.error('Error fetching data from News API');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center text-white font-semibold text-4xl m-6">Health and Fitness News</h1>
        {loading ? <Loader/> : 
          (<div className="flex flex-wrap justify-center w-4/5 m-auto">
          {newsData.map((article, index) => (
              article.description !== null && <BlogCard key={index} title={article.title} description={article.content} url={article.link} urlToImage={article.image_url}/>
          ))}
          </div>) 
        }
        <Footer/>
    </div>
  );
};

export default Blog;