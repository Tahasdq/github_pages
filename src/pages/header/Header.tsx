import { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems, menuItemsList, wallets } from "../../DataList";
import MenuItemCard from "../../components/menuItemCard/MenuItemCard";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showConnectWallet, setShowConnectWallet] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleWalletClick = () => {
    setShowConnectWallet(!showConnectWallet);
  };

  const menuItemsWithHandlers = menuItemsList.map((item) => {
    if (item.name === "menu") {
      return { ...item, onClick: handleMenuClick };
    } else if (item.name === "Connect Wallet") {
      return { ...item, onClick: handleWalletClick };
    } else {
      return item;
    }
  });

  return (
    <div className="text-custom text-white w-full h-[100vh] bg-black">
      <div className="flex items-center justify-evenly py-3 md:py-6">
        <div className="text-[#acacac]">gm@nome.gallery</div>
        <div className="text-[#7c7b7b] tracking-wide md:tracking-widest text-md md:text-lg">
          ORDINALS GALLERY
        </div>
        <div className="flex gap-3 md:gap-6 opacity-70">
          <img className="w-3 md:w-5" src="/public/images/1.png" alt="" />
          <img className="w-3 md:w-5" src="/public/images/2.png" alt="" />
          <img className="w-3 md:w-5" src="/public/images/3.png" alt="" />
        </div>
      </div>
      <ul className="flex uppercase">
        {menuItemsWithHandlers.map((item, index) => (
          <MenuItemCard
            item={item}
            index={index}
            showSearch={showSearch}
            setShowSearch={setShowSearch}
          />
        ))}
      </ul>
      {showSearch && (
        <div className="p-6 right-2 w-fit absolute">
          <input
            type="text"
            placeholder="Search . . ."
            className="w-[13rem] md:w-[23rem] h-12 outline-none border-b-2 border-white bg-transparent text-white p-6"
          />
        </div>
      )}
      {showMenu && (
        <div className="absolute left-0 p-1 sm:p-7 md:p-0 pl-0 py-6 sm:py-8 md:py-12 bg-gradient-to-b from-[#464646] to-black w-fit border-b-2 border-white border-r-2">
          <ul className="uppercase grid gap-2 sm:gap-4 md:gap-6">
            {menuItems.map((item) => (
              <li
                className="px-2 sm:px-4 md:px-6 pl-8 text-[10px] sm:text-[12px] md:text-[14px] cursor-pointer py-2 hover:bg-black rounded-sm"
                key={item.name}
              >
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {showConnectWallet && (
        <div className="p-4 pr-0 py-4 bg-gradient-to-b from-[#464646] to-black w-fit right-0 border-b-2 border-white border-l-2 absolute">
          <ul className="grid">
            {wallets.map((wallet) => (
              <li
                className="flex items-center px-16 gap-4 pr-24 hover:bg-black py-3 rounded-sm"
                key={wallet.name}
              >
                <img className="w-8" src={wallet.imgSrc} alt={wallet.name} />
                {wallet.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
