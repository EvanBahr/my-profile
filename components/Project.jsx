import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SimpleTodoList from "../assets/images/SimpleTodoList.png";
import calculator from "../assets/images/calculator.png";
import simplecashier from "../assets/images/simple-cashier.png";
import netflix from "../assets/images/netflix.png";
import profile from "../assets/images/profile.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";

const Project = () => {
  const projects = [
    {
      img: SimpleTodoList,
      name: "Simple Todo List",
      github_link: "https://github.com/EvanBahr/SimpleTodoList",
      live_link: "https://evanbahr-simpletodolist.vercel.app/",
    },
    {
      img: calculator,
      name: "calculator",
      github_link: "https://github.com/EvanBahr/calculator",
      live_link: "https://evan-calculator.vercel.app/",
    },
    {
      img: simplecashier,
      name: "Simple Cashier",
      github_link: "https://evanbahr-simplecashierapp.vercel.app/",
      live_link: "https://github.com/EvanBahr/cashier-app-reborn",
    },
    {
      img: netflix,
      name: "netflix-clone",
      github_link: "https://github.com/EvanBahr/netflix",
      live_link: "https://evan-net.vercel.app/",
    },
    {
      img: profile,
      name: "My-Profile",
      github_link: "https://github.com/EvanBahr/my-profile",
      live_link: "https://evanbahr.vercel.app/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className=" w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <div>
                    <Image
                      href={project_info.live_link}
                      src={project_info.img}
                      alt=""
                      className="rounded-lg cursor-pointer"
                    />
                  </div>
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
