export interface SearchContextType {
  handleSearch: (searchString: string) => void;
}
interface imgType {
  original: {
    url: string;
  };
  preview_gif: {
    url: string;
  };
}
export interface gifType {
  id: string;
  title: string;
  images: imgType;
}

export interface modalProps {
  id: string;
  onClose: () => void;
}

export interface paginationProps {
  pageInfo: {
    offset: number;
    count: number;
  };
  paginationHandle: (count: number) => void;
}
export interface cardProps {
  gif: gifType;
  handleModal: (card_id: string) => void;
}

export interface ButtonType {
  // type: string;
  disabled?: boolean;
  onClick: () => void;
  children: JSX.Element;
}
export interface Props {
  cards: gifType[];
}
