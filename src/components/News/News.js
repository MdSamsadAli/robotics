import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
        <div class="bg-black">
            <div class="robotics p-6">
                <h1 class="align-center mb-2">Latest News</h1>
                <div class="slide-container swiper">
                    <div class="slide-content">
                        <div class="card-wrapper swiper-wrapper">
                        </div>
                        <Slider {...settings}>
                            <div class="card swiper-slide">
                                <div class="image-content" >
                                    <span class="overlay"></span>

                                    <div class="card-image rob-1" data-aos="fade-in">
                                        <img src="images/Jimmy-Fallon.jpg" alt="" class="card-img" height={300}/>
                                    </div>
                                </div>

                                <div class="card-content" data-aos="fade-in">
                                    <h2 class="name">David Dell</h2>
                                    <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                                    <button class="btn btn-success">View More</button>
                                </div>
                            </div>
                            <div class="card swiper-slide">
                                <div class="image-content">
                                    <span class="overlay"></span>

                                    <div class="card-image rob-1" data-aos="fade-in">
                                        <img src="images/David-with-multiple-Sophias-2.png" alt="" class="card-img" height={300}/>
                                    </div>
                                </div>

                                <div class="card-content" data-aos="fade-in">
                                    <h2 class="name">David Dell</h2>
                                    <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                                    <button class="btn btn-success">View More</button>
                                </div>
                            </div>
                            <div class="card swiper-slide">
                                <div class="image-content">
                                    <span class="overlay"></span>

                                    <div class="card-image rob-1" data-aos="fade-in">
                                        <img src="images/20200313-D72_3584.jpg" alt="" class="card-img" height={300}/>
                                    </div>
                                </div>

                                <div class="card-content" data-aos="fade-in">
                                    <h2 class="name">David Dell</h2>
                                    <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                                    <button class="btn btn-success">View More</button>
                                </div>
                            </div>
                            <div class="card swiper-slide">
                                <div class="image-content">
                                    <span class="overlay"></span>

                                    <div class="card-image rob-1" data-aos="fade-in">
                                        <img src="images/1_NOmGdicMgCx6gTfq4XvyEw.jpeg" alt="" class="card-img" height={300}/>
                                    </div>
                                </div>

                                <div class="card-content" data-aos="fade-in">
                                    <h2 class="name">David Dell</h2>
                                    <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                                    <button class="btn btn-success">View More</button>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
export default MultipleItems