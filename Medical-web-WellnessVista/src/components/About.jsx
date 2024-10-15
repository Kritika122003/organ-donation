import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
        we are committed to revolutionizing the way organ donations are managed and coordinated.
         Leveraging the power of blockchain technology, we provide a transparent, secure, and decentralized 
         platform that connects hospitals, patients, and medical professionals. Our goal is to streamline the 
         organ donation process, reduce wait times, and improve communication between healthcare providers,
          ensuring that life-saving organs reach the patients who need them most.

        </p>
        <p className="text-justify lg:text-start">
        Our platform allows hospitals to authenticate themselves, input patient medical details, and raise 
        organ requests with confidence. Other hospitals in our network can quickly respond to these requests, 
        enabling a seamless process for organ transfers. Additionally, patients or their representatives can
         track the status of these organ requests in real-time, fostering trust and transparency throughout the donation journey.
        </p>
        <p className="text-justify lg:text-start">
        We believe in the importance of collaboration, innovation, and security in saving lives.
         By using blockchain technology, we ensure that every transaction and request is securely recorded, 
         providing an unalterable record of all actions taken on the platform. Together, we aim to make
          organ donation more efficient, transparent, and accessible.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
