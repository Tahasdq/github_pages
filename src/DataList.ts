import {
  InputItemListProps,
  MenuItemListProps,
  WalletListProps,
  menuItemsProps,
} from "./Types";

export const menuItemsList: MenuItemListProps[] = [
  {
    name: "menu",
    classes:
      "border-2 border-r-[1px] border-l-0 border-white py-6 px-4 md:px-0 text-center w-full  flex justify-center items-center text-md transition-all duration-100 ease-linear gap-3 md:gap-6 group",
    isMenu: true,
  },
  { name: "About", link: "#" },
  { name: "1/1 Art", link: "#" },
  { name: "Editions", link: "#" },
  { name: "Leader Board", link: "#" },
  { name: "Runes", link: "#" },
  { name: "Studio", link: "#" },
  {
    name: "Connect Wallet",
    classes:
      "border-2 border-t-[0.5px] border-white border-r-0 py-6 text-center w-[160rem] text-sm  flex items-center justify-end md:justify-center text-md transition-all duration-100 ease-linear gap-6 md:gap-12 group ",
    isLast: true,
  },
];

export const menuItems: menuItemsProps[] = [
  { name: "About", link: "#" },
  { name: "1/1 Art", link: "#" },
  { name: "Editions", link: "#" },
  { name: "Leader Board", link: "#" },
  { name: "Runes", link: "#" },
  { name: "Studio", link: "#" },
  { name: "Contact", link: "/contact" },
];

export const wallets: WalletListProps[] = [
  {
    name: "Xverse",
    imgSrc: "/public/images/icon-mono_lightbg.png",
  },
  {
    name: "UniSat",
    imgSrc: "/public/images/logo_unisat.png",
  },
  {
    name: "Leather",
    imgSrc: "/public/images/Property_14.png",
  },
];

export const inputItemList: InputItemListProps[] = [
  {
    placeholder: "TWITTER",
    img: "/public/images/1.png",
  },
  {
    placeholder: "DISCORD",
    img: "/public/images/2.png",
  },
  {
    placeholder: "YOUTUBE",
    img: "/public/images/3.png",
  },
];

export const inputItemList2: InputItemListProps[] = [
  {
    placeholder: "NAME",
  },
  {
    placeholder: "EMAIL",
  },
  {
    placeholder: "MESSAGE",
    textarea: true,
    rows: 4,
  },
];
