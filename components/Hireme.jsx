import React from "react";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto  min-h-[24rem] mt-24 flex flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl text-center font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-center text-justify max-w-lg text-sm mt-4 mb-16 text-gray-200 leading-6">
            Are you in need of a skilled React.js Front-end Developer? Look no
            further! I bring expertise in building captivating web applications,
            responsive designs, and smooth user experiences. With my proficiency
            in HTML, CSS, and JavaScript, Im ready to collaborate with you on
            your next project. Lets enhance your digital presence and engage
            users with cutting-edge technology. Dont miss the opportunity to
            work together; reach out today and lets create something
            extraordinary!
          </p>
          {/* <button className="btn-primary mt-10">Say Hello</button> */}
        </div>
      </div>
    </section>
  );
};

export default Hireme;
