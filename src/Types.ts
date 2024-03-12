export interface MenuItemListProps {
  name: string;
  link?: string;
  classes?: string;
  onClick?: () => void;
  isMenu?: boolean;
  isLast?: boolean;
}
export interface MenuItemCardProps {
  item: MenuItemListProps;
  index: number;
  showSearch: boolean;
  setShowSearch: (show: boolean) => void;
}

export interface WalletListProps {
  name: string;
  imgSrc: string;
}

export interface menuItemsProps {
  name: string;
  link: string;
}

export interface InputItemListProps {
  placeholder: string;
  img?: string;
  textarea?: boolean;
  rows?: number;
}
