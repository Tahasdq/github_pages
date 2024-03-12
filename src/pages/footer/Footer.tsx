import { useState } from "react";
import { inputItemList, inputItemList2, menuItems } from "../../DataList";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="text-custom w-full h-auto">
      <div className="bg-[#adadad] pt-12">
        <li
          className={
            "py-4 bg-black text-white text-center w-fit px-8 flex justify-center -mt-11 items-center text-md transition-all duration-100 ease-linear gap-6 group fixed"
          }
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="flex flex-col justify-around w-5 h-5 cursor-pointer">
            <div className="h-[0.8px] bg-white transition-all duration-500 ease-in-out "></div>
            <div className="h-[0.8px] bg-white transition-all duration-500 ease-in-out "></div>
            <div className="h-[0.8px] bg-white transition-all duration-500 ease-in-out "></div>
          </div>
          MENU
        </li>
        {showMenu && (
          <div className="absolute top-[11vh] left-0 p-3 pl-0 py-12 bg-gradient-to-b from-[#464646] to-black w-fit border-b-2 border-white border-r-2">
            <ul className="uppercase grid gap-6">
              {menuItems.map((item) => (
                <li
                  className="px-6 cursor-pointer py-2 text-white hover:bg-black rounded-sm"
                  key={item.name}
                >
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex items-center justify-center gap-4 mt-4 md:-mt-4 pb-8 ">
          <h1 className="font-medium text-5xl text-custom2">CONTACT</h1>
          <div className="w-16 h-16 items-center justify-center flex bg-black rounded-full">
            <i className="fa-regular fa-arrow-down text-white"></i>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 md:grid-cols-12 h-fit">
        <div className="col-span-6 bg-black px-20 pt-16 pb-4 text-white order-2 md:order-1">
          <h3 className="text-[#747474] text-center lg:text-left text-[0.6rem] md:text-[0.8rem] lg:text-[1rem] mb-2">
            GET IN TOUCH
          </h3>
          <h2 className="text-[1.1rem] md:text-[1.4rem] text-center lg:text-left lg:text-[1.7rem]">
            gm@nome.gallery
          </h2>
          <div className="grid mt-10 md:mt-20">
            {inputItemList.map((item, index) => (
              <div
                key={index}
                className="py-4 pt-10 flex items-center border-b-[1px] border-[rgba(255,255,255,0.5)] w-full transition-all duration-150 hover:border-white"
              >
                <input
                  type="text"
                  className="outline-none text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] text-white bg-transparent w-full placeholder:text-[#747474]"
                  placeholder={item.placeholder}
                />
                <img src={item.img} alt="" className="w-6 md:w-8" />
              </div>
            ))}
          </div>
          <div className="mt-16 lg:mt-28 border-[1px] border-l-[rgba(255,255,255,0.5)] border-white p-1 lg:p-4 flex gap-2">
            <input
              type="text"
              placeholder="Your email"
              className="py-2 bg-transparent outline-none text-white w-full placeholder:text-[#747474] text-center text-[1rem] border-b-[1px] border-[rgba(255,255,255,0.5)] transition-all duration-150 hover:border-white"
            />
            <button className="bg-[#C9C9C9] text-[#050505] tracking-widest text-custom2 px-2 lg:px-10 font-bold">
              SUBSCRIBE
            </button>
          </div>
          <div className="mt-28 mb-4 lg:mb-8 grid gap-4 lg:gap-6">
            {inputItemList2.map((item, index) => (
              <div
                key={index}
                className="border-b-[1px] border-[rgba(255,255,255,0.5)] pb-6 lg:pb-12"
              >
                {item.textarea ? (
                  <textarea
                    className="bg-transparent text-white outline-none w-full resize-none"
                    defaultValue={item.placeholder}
                    rows={item.rows}
                  />
                ) : (
                  <input
                    type="text"
                    className="bg-transparent text-white w-full outline-none"
                    defaultValue={item.placeholder}
                  />
                )}
              </div>
            ))}
          </div>
          <button className="w-full py-3 lg:py-5 bg-[#C9C9C9] text-[#050505] tracking-widest text-[1rem] lg:text-[1.2rem] text-custom2 font-extrabold">
            SEND MESSAGE
          </button>
          <div className="text-[#4A4A4A] text-[0.6rem] lg:text-[0.8rem] mt-24 flex justify-between ">
            <h3 className="transition-all duration-100 hover:text-white">
              &copy; 2024 NOME ART
            </h3>
            <h3 className="transition-all duration-100 hover:text-white">
              PRIVACY POLICY
            </h3>
            <h3 className="transition-all duration-100 hover:text-white">
              TERMS OF SERVICE
            </h3>
          </div>
        </div>
        <div className="col-span-6 order-1 md:order-2">
          <video
            autoPlay
            loop
            muted
            className="w-full h-[100vh] md:h-full object-cover "
            src="/public/videos/footer video.mp4"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Footer;
