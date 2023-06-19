import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BiMap } from "react-icons/bi";
const Contact = () => {
  const contact_info = [
    {
      logo: MdOutlineEmail,
      text: "evanbahrdev@gmail.com",
      link: "mailto:evanbahrdev@gmail.com",
    },
    {
      logo: FaWhatsapp,
      text: "0878 6004 8693",
      link: "whatsapp://send?phone=6285860048693",
    },
    {
      logo: BiMap,
      text: "Surabaya, Indonesia",
      link: "https://www.google.com/maps?q=Surabaya,+Indonesia",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name" />
            <input type="Email" placeholder="Your Email Address" />
            <textarea placeholder="Your Message" rows={10}></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="cursor-pointer min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <contact.logo />
                </div>
                <a
                  target="_blank"
                  className="md:text-base text-sm  break-words hover:text-blue-500"
                  href={contact.link}
                >
                  {contact.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
