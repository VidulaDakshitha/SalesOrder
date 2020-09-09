import React, { useState } from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';

const items = [
    {
        src: <div className="single-welcome-slide" style={{backgroundImage: "url(/assets/img/bg1.jpg)"}}>
            <div className="welcome-content h-100">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center">

                        <div className="col-12 col-md-10 col-lg-8">
                            <div className="welcome-text text-center">
                                <h2 className="topic-main">
                                   Welcome to Shop
                                </h2>
                                <h5 className="topic-sub">
                                    50% OFF
                                </h5>
                                <br/>
                                <button className="btn btn-success">More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        id:1
    },
    {
        src: <div className="single-welcome-slide" style={{backgroundImage: "url(/assets/img/bg2.jpg)"}}>
            <div className="welcome-content h-100">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center">

                        <div className="col-12 col-md-10 col-lg-8">
                            <div className="welcome-text text-center">
                                <h2 className="topic-main">
                                    Daily Deals

                                </h2>
                                <h5 className="topic-sub">
                                   20% OFF
                                </h5>
                                <br/>
                                <button className="btn btn-success">More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        id:2
    },
    {
        src:  <div className="single-welcome-slide" style={{backgroundImage: "url(/assets/img/bg3.jpg)"}}>
            <div className="welcome-content h-100">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center">

                        <div className="col-12 col-md-10 col-lg-8">
                            <div className="welcome-text text-center">
                                <h2 className="topic-main">
                                    Daily Deals
                                </h2>
                                <h5 className="topic-sub">
                                    5% OFF
                                </h5>
                                <br/>
                                <button className="btn btn-success">More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        id:3
    },

    {
        src:  <div className="single-welcome-slide" style={{backgroundImage: "url(/assets/img/bg4.jpg)"}}>
            <div className="welcome-content h-100">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center">

                        <div className="col-12 col-md-10 col-lg-8">
                            <div className="welcome-text text-center">
                                <h2 className="topic-main">
                                   Weekly Deals
                                </h2>
                                <h5 className="topic-sub">
                                    20% OFF
                                </h5>
                                <br/>
                                <button className="btn btn-success">More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        id:4
    }




];






const MainBg = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.id}


            >
                {item.src}
                <CarouselCaption captionText="" captionHeader="" />
            </CarouselItem>
        );
    });

    return (
        <section className="welcome-area">
            <div className="welcome-slides owl-carousel">
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}


                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </div>
        </section>
    );
}

export default MainBg;

