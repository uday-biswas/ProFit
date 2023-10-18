import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';

const Blog = () => {
  const [newsData, setNewsData] = useState([]);
  const apiKey = '20dabcaf319647bab2bb46f36013a6ef';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${apiKey}`
        );

        if (response.ok) {
          const data = await response.json();
          setNewsData(data.articles);
        } else {
          console.error('Error fetching data from News API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center text-white font-semibold text-4xl m-6">Health and Fitness News</h1>
        <div className="flex flex-wrap justify-center w-4/5 m-auto">
        {newsData.map((article, index) => (
            article.description !== null && <BlogCard key={index} title={article.title} description={article.description} url={article.url} urlToImage={article.urlToImage}/>
        ))}
        </div>
    </div>
  );
};

export default Blog;