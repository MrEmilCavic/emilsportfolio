import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Projects.css"
import Emilsjam from './emilsjampreview.png';
import EmilsJamVideo from './emilsjam.mp4';
import FarmerEmils from './farmeremilsview.png';
import FarmerEmilsVideo from './farmeremils.mp4';
import Github from '../util/githublogo.png';

function Projects() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [nav0, setNav0] = useState(null);
    const [nav1, setNav1] = useState(null);
    var nav0Ref = useRef(null);
    var nav1Ref = useRef(null);

    useEffect(() => {
        setNav0(nav0Ref);
        setNav1(nav1Ref);
    }, []);


    var settings = {
        className: "center",
        lazyLoading: true,
        autoplay: false,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        customPaging: function(i) {
            return (
                <a> {
                    i === 0 ? <img src={Emilsjam} width="auto" height="50px" /> :
                    i === 1 ? <img src={FarmerEmils} width="auto" height="50px" />  :
                    'Up Next!'
                    }
                    </a>   
            )},
        
        afterChange: current => setCurrentSlide(current)
      };

      return(
        <div className="Projects">
            <div className="slider">
                <Slider {...settings}
                    asNavFor={nav1} ref={slider => (nav0Ref = slider)}>
                    <div>
                    <video width="100%" height="auto" controls poster={Emilsjam}>
                        <source src={EmilsJamVideo} type="video/mp4"/>
                    </video>
                    </div>
                    <div data-title="Farmer Emils">
                    <video width="100%" height="auto" controls poster={FarmerEmils} >
                        <source src={FarmerEmilsVideo} type="video/mp4"/>
                    </video>
                    </div>
                    <div className="upNext">
                        <h1>More to come!</h1>
                    </div>
                </Slider>
            </div>
            <div className="descriptionWrap">
             <Slider 
                asNavFor={nav0} ref={slider => (nav1Ref = slider)}
                slidesToShow={1}
                focusOnSelct={true}
                arrows={false}
                >
                <div className="one">
                    <h4>(sorry for the bad audio in the video - had to use a potato for a microphone)</h4>
                    <h2>emilsJam!</h2>
                    A quick and simple front-end project where I used CSS and React.
                    The idea is to build a simple API interface, getting information and post/put information back.
                    All the while looking pretty and being easy to use! So, using the Spotify API, on loading the page 
                    the first call is made where you login and then the fun can begin: search for songs on Spotify, 
                    the results being rendered on the page with a simple option to add, or if added to remove, that track
                    for a playlist you want to create. Put in a playlist name, click submit - and we send the info back via the API
                    and the playlist is created!
                    <div className="Challenges">
                        While it was a nice, quick to do exercise in Front-End development, I found the documentation of how the API
                        works/is supposed to work as well as the examples provided insufficient as in following the documentation
                        did not result in a positive outcome! It took a while of trial and error and some research where I found
                        on various forums users who had the same problem as me - and finally I found a solution that worked!
                        Thankfully the rest was quite easy to implement as I had learned and practised a lot of the feautures in 
                        my Full-Stack Dev course on codecademy.
                    </div>
                    <div class="linkWrap">
                    <a href="https://mremilcavic.github.io/emilsJam/" target="_blank">Check out the live site</a> (!important: note due to restrictions on Spotify's side the API works only for users unlocked by me - the free for anyone version is hiding behind a paywall)<br />
                    Check out the code on the github repo: <a href="https://github.com/MrEmilCavic/emilsJam" target="_blank"><img src={Github} alt="githublogo"  width="50px" height="auto"/></a>
                    </div>
                </div>
                <div className="two">
                    <h4>(sorry for the bad audio in the video - had to use a potato for a microphone)</h4>
                    <h2>Farmer Emil's</h2>
                    A mock webshop, showing item categories, items to choose from and add to the shopping cart and a shopping cart view.
                    While there is already more functionality built in like registering & logging in the full implementation including mock payment 
                    and order handling is coming soon!
                    This one is a bit of a step up from the first project as it combines both backend and frontend into one:
                    PostgreSQL database populated with data I created in a CSV file, setting up an express server with Node and express, connecting server to the database, creating models,
                    services, routes on the backend, making the api calls on the frontend using Axios to be able to display and work with the data/states.
                    To be able to use the states properly I also implemented Redux, which was absolutely necessary when dealing with so many states
                    across so many components! The frontend bit was pretty easy to implement as I focused on keeping things simple to get things functioning and the web app 
                    up and running quickly - also making extensive use of the MUI library for icons and buttons saved me a lot of time!
                    <div className="challenges">
                        While it was a lot of work setting it all up, the backend alone took a few days just writing all the code, it was extremely fulfilling
                        when running the server, checking the routes in the browser and seeing the data pop up! To be honest my main challenge here was working with Redux,
                        on the one hand Redux async thunks gave me a bit of grief at first, later I implemented Redux Persist to have a shopping cart that doesn't lose its items
                        even when the session is closed. Once I got it all working it was great to simply call the useSelect and useDispatch on the various states needed in a component,
                        but sometimes I felt like running against a wall and it took me a good while to understand that Redux is expecting the user to work in certain ways in order to
                        make it work (and not, lets say suddenly throw errors left and right that some states are undefined, even though there was nothing wrong with them! ;)).
                    </div>
                    All in all it is a greatly satisfying experience developing this and, as stated in the beginning, there is still more to do. I can't wait to share more about the journey
                    once I have implemented more features!
                    <div class="linkWrap">
                    The live site will be online once all the missing essential features are implemented. Stay tuned! <br />
                    Check out the code on the github repo: <a href="https://github.com/MrEmilCavic/FarmerEmilsWebshop" target="_blank"><img src={Github} alt="githublogo" width="50px" height="auto"/></a>
                    </div>
                </div>
                <div className="three">
                    <h2>Web App part two: the call of ASP.Net</h2>
                     Currently in progress - a web app written in ASP.Net. As I have seen the demand a lot for C# web apps there will be a little project coming up
                     soon!
                 </div>     
                </Slider>         
            </div>
        </div>
    );
}

export default Projects;