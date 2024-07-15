import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import "./Home.css";
import Faceview from '../Header/emilfaceview.png';


function Home() {

    var settings = {
        className: "center",
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 15000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        pauseOnHover: true
      };

    return (
        <div className="slideWrap">
            <Slider {...settings} className="Slider">
                <div className="One">
                    <h2>Hello and Welcome!</h2>
                    <h3>I am Emil, a guy deeply passionate about Web-App Development.</h3>
                    <img src={Faceview} className="Face" height="300em" />  
                </div>
                <div className="slides">
                    Originally from a business administration background I have always loved web development.
                    Already as a teenager In school I taught myself HTML, CSS and JavaScript in my free time.
                    Later in my business administration studies I picked up Python to have some nice tools I could use for data analysis!
                    Following my employment as financial consultant I learned SQL on the job as well.
                    I have always gravitated towards coding, which is why I wanted a more tech heavy job. And still I wanted more - I started
                    learning C#/ASP.Net in my free time. Going full circle I have rekindled my passion and joy for web development, which is why
                    I took a course on Full-Stack Web-App Development.
                    Over the years I accrued knowledge of a few programming and coding languages:
                    <ul>
                        <li>HTML & CSS</li>
                        <li>JavaScript: Node, express, React, Redux</li>
                        <li>C#: ASP.Net</li>
                        <li>Python</li>
                        <li>MS SQL & PostgreSQL</li>
                    </ul>
                </div>
                <div className="slides">
                    What I love about software development is: its a creative process, in the very sense of the word. To create something from scratch,
                    a tool that is useful, that is easy to use, something that people enjoy using, that works efficiently and is esthetically pleasing at 
                    the same time - that is something that fills me with absolute joy! Its not just about finding the most efficient way to do something though,
                    as figuring out errors and finding solutions is just as big a part of development. That is where there are challenges which are overcome by 
                    analytical thinking and a systematic approach which is why programming never gets boring! Sometimes finding the solution to a problem can 
                    be even more rewarding than a finished product itself!
                    Check out my <Link to="/projects">projects</Link> to see what I have worked on so far, the challenges I faced and the solutions I have come up with!
                </div>
                <div className="slides">
                    If I'm not coding you'll probably find me either at a calisthenics park which is what I like to do to keep fit or on the Rugby pitch (or watching a game in the pub ;))
                    Rugby is an amazing sport, as it is just as mentally demanding as it is physical! Apart from having to be fit you have to be disciplined and focused, even when
                    getting tired and - crucially - do your best for the team. It doesn't matter if you are the fast guy on the flank or the heavy, strong center, every single player
                    has a role to play in the team for the team to win the game. All these components make for a great sport I believe where it takes the sum of all players working together to make
                    a strategy work successfully and when it does, its absoluletly beautiful in its own right!
                </div>
                <div>
                    Do you have any questions? Want to get in touch? Feel free to shoot me a <Link to="/contact">message!</Link>
                </div>
            </Slider>
        </div>
    );
}

export default Home;