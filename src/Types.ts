import React from "react";

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
  type?: string;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}
export interface Props {
  cards: gifType[];
}

export interface InputType {
  className?: string;
  name: string;
  type?: string;
  value: string;
  placeholder: string;
  onChange: (str: string) => void;
  onKeyDown?: (code: string) => void;
}
