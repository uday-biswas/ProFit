const BlogCard = ({ title, description, url, urlToImage }) => {
    let info = description;
    if(info.length > 250) {
        info = description.substring(0,250);
    }
    return(
        <div className="flex flex-col text-white rounded-xl p-1 bg-slate-700 shadow-xl w-full md:w-2/6 m-5">
                {urlToImage !== null && <img className="w-full rounded-lg h-2/5 min-h-[100px] max-h-[230px]" src={urlToImage} alt="blog_image" />}
            <div className="blog_details">
                <h2 className="text-2xl text-center font-semibold m-2.5">{title}</h2>
                <div className="blog_description text-center">{info}...</div>
                <div className="m-auto w-fit font-semibold text-blue-300"><a href={url} target="_blank" rel="noreferrer">Read More</a></div>
            </div>
        </div>
    )
}

export default BlogCard;