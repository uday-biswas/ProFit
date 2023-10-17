import './Home.css';
import { useState } from 'react';
import WorkOutCards from './WorkOutCards';
import Footer from './Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import successStories from '../json_data/successStories.json';

const Home = (props) => {
    const response = props.workouts;

    const notify = () => toast("🦄 Wow so easy!");

    return (
        <div className="back">
            {/* Hero Section */}
            <section
                className="text-white relative"
            >
                <div className="bg-image"></div>
                <div className="container mx-auto text-center relative z-10 bg-text">
                    <h1 className="text-4xl font-bold">Achieve Your Dream Physique</h1>
                    <p className="mt-4 text-lg ">Unlock your potential with our fitness programs and nutrition guides.</p>
                    <button className="mt-6 px-6 py-2 bg-yellow-500 text-blue-900 font-semibold rounded-full hover:bg-yellow-600 transition duration-300"
                        onClick={() => props.started(2)}>
                        Get Started
                    </button>
                </div>
            </section>

            {/* Featured Workouts */}
            <section className="py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl text-white font-semibold">Featured Workouts</h2>
                    <div className="flex flex-wrap justify-center mt-6 space-x-4">
                        {response.slice(0, 4).map((workout) => {
                            return <WorkOutCards key={workout.id} {...workout} explore={props.explore} />
                        })}
                    </div>
                </div>
            </section>

            {/* Success stories */}
            <section className="py-12">
                <h2 className="text-3xl text-white text-center font-semibold m-2.5">Success Stories</h2>
                <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000}>
                    {successStories.map((story) => (
                        <div key={story.id} className="carousel-item">
                            <div className=' flex space-x-4 justify-center items-center m-2.5'>
                                <div className='carousel-img'><img src={story.image} alt={story.name} /></div>
                                <div className="text-white font-semibold text-3xl">{story.name}</div>
                            </div>
                            <div className="text-white font-semibold text-2xl">{story.testimonial}</div>
                        </div>
                    ))}
                </Carousel>
            </section>

            <button onClick={notify}>Notify</button>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Footer className='foot'>Made with ❤️ by ProFit</Footer>
        </div>
    )
}

export default Home;