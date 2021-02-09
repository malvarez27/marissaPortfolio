import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

export default class Testimonials extends Component {
  render() {
    return(
      <section id="testimonials">
        <h4><span>EMPLOYER TESTIMONIALS</span></h4>

        <div className="carousel">
          <Slider
            autoplay={15000}
            previousButton={<i className="carousel-arrow fa fa-2x fa-angle-left" />}
            nextButton={<i className="carousel-arrow fa fa-2x fa-angle-right" />}
          >
            {this.props.testimonials.map((testimonial, index) =>
              <div key={index} className="inner">
                <blockquote>
                  <p>{testimonial.quote}</p>
                  <cite>- {testimonial.name}, {testimonial.title} at {testimonial.company}</cite>
                </blockquote>
              </div>
            )}
          </Slider>
        </div>
      </section>
    );
  }
}