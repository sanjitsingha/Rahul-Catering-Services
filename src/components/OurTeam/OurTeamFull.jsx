import React from "react";
import { useEffect } from "react";
import { NavLink , useLocation} from "react-router-dom";
const OurTeamFull = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="md:p-16 p-4 bg-gray-200">
        <h1 className="font-mig text-[45px] leading-10 text-primary-0/50">
          Our <br /> <span className="text-primary-0">Leader</span>
        </h1>
        <div className="flex w-full gap-10 mt-4 flex-col md:flex-row items-center">
          <div className="relative w-[300px] h-[350px] flex  justify-center">
            <img
              className="w-full h-full rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="founder"
            />
            <div className="absolute bg-white w-[90%] h-[60px]  bottom-4 rounded-lg flex flex-col justify-center font-nats leading-5 pl-4 cursor-pointer ">
              <p className="text-[22px]">Rahul Singha</p>
              <p className="text-[16px] text-black/70">Founder</p>
            </div>
          </div>

          <div className="relative w-[300px] h-[350px] flex  justify-center">
            <img
              className="w-full h-full rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="founder"
            />
            <div className="absolute bg-white w-[90%] h-[60px]  bottom-4 rounded-lg flex flex-col justify-center font-nats leading-5 pl-4 cursor-pointer ">
              <p className="text-[22px]">Chabilal Singha</p>
              <p className="text-[16px] text-black/70">Manager</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:p-16 p-4">
        <div className=" relative bg-[url('../../../public/Images/OurTeam.png')] h-[430px] w-full  bg-cover bg-no-repeat leading-5 font-mig text-[45px] ">
          <div className="absolute bottom-6 left-6">
            <h1 className="text-[#00FF80]/60">Our</h1> <br />
            <h1 className="text-[#00FF80]">Team</h1>
          </div>
        </div>
        <p className="font-nats text-primary-0 text-[22px] leading-[25px] mt-[10px]">
          Rahul Singha Catering Services is more than just a culinary venture;
          it is a tight-knit family of passionate individuals dedicated to
          making every celebration a memorable and gastronomic experience. At
          the heart of this flourishing enterprise is a team of dynamic and
          hardworking individuals, each contributing their unique skills and
          talents to create a harmonious and efficient working environment.
          Rahul Singha, the driving force behind the catering service, has
          carefully handpicked a group of individuals who share his vision for
          culinary excellence and impeccable service. The team comprises
          seasoned chefs, diligent servers, and meticulous event coordinators,
          all working in unison to transform ordinary events into extraordinary
          celebrations.
        </p>

        <p className="font-nats text-primary-0 text-[22px] leading-[25px] mt-[10px]">
          The backbone of the team is undoubtedly the chefs, whose culinary
          prowess knows no bounds. Trained in a diverse array of cuisines, they
          bring creativity and innovation to every dish they craft. From
          traditional delicacies that evoke nostalgia to contemporary culinary
          creations that tantalize the taste buds, the chefs at Rahul Singha
          Catering Services are adept at curating menus that cater to diverse
          palates. In addition to their culinary skills, the service staff is an
          indispensable part of the team, ensuring seamless execution during
          events. Rahul's team of servers goes beyond merely delivering food to
          tables; they embody professionalism, courtesy, and a keen eye for
          detail. Their ability to anticipate and address the needs of guests
          ensures a flawless dining experience, leaving a lasting impression on
          clients and attendees alike.
        </p>

        <p className="font-nats text-primary-0 text-[22px] leading-[25px] mt-[10px]">
          The event coordinators play a pivotal role in orchestrating the entire
          catering service. Diligently managing logistics, timelines, and client
          preferences, they work tirelessly to bring Rahul Singha's vision to
          life. Their meticulous planning and coordination ensure that each
          event, whether it be a wedding, birthday, anniversary, or any special
          occasion, unfolds seamlessly. What sets Rahul Singha's team apart is
          not just their individual skills, but their collective commitment to
          excellence. The camaraderie and mutual respect among team members
          create a positive and energizing work environment, where everyone is
          encouraged to contribute their ideas and expertise.
        </p>

        <p className="font-nats text-primary-0 text-[22px] leading-[25px] mt-[10px]">
          Beyond their professional roles, the team at Rahul Singha Catering
          Services shares a genuine passion for creating memorable moments for
          their clients. This shared enthusiasm fosters a sense of unity and
          purpose, making every event a collaborative success. In essence, Rahul
          Singha's catering team is more than a group of individuals working
          together – they are a cohesive unit that transforms events into
          unforgettable experiences. With their unwavering dedication,
          creativity, and teamwork, this group of hardworking professionals
          continues to elevate the standard of catering services, making Rahul
          Singha Catering Services a name synonymous with excellence in the
          industry.
        </p>

        <div className="w-full flex justify-center items-center mt-20">
          <div className="px-4 bg-primary-0 py-2 font-nats text-white text-[18px] rounded-3xl ">
            <NavLink to={"/"}>Go Home</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeamFull;
