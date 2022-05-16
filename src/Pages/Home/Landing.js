import React from "react";
import bucketGirl from "../../Assets/images/bucketgirl.png";

const Landing = () => {
  return (
    <>
      <div class="hero h-screen lg:h-[60vh] bg-accent mt-16">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="text-xl"
            >
              Best Quality
            </p>
            <h1 data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="400" class="text-4xl font-bold">Professional Cleaning Service</h1>
            <p  data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="600"
            class="py-6 max-w-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button data-aos="zoom-in"
              
              data-aos-delay="1200"
             class="btn btn-primary">Get Started</button>
          </div>
          <div className="h-[60vh]">
            <img src={bucketGirl} class="h-full shrink-0" alt="hero" />
          </div>
        </div>
      </div>
      <div className="p-10 shadow-lg mt-[-30px] relative z-50 bg-[#F2F2F2] w-5/6 rounded-2xl mx-auto">
        <h1 className="text-primary text-2xl mb-2">Get Free Estimate</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </div>
        <button className="btn btn-primary mt-5">Get a Quote</button>
      </div>
    </>
  );
};

export default Landing;
