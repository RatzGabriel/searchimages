import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../Api/config";
export interface PhotoContextProps {
  term: string;
}

export const PhotoContextProvider: any = createContext(null);

const PhotoContext = (props: any) => {
  const [images, setImages] = useState<any>([]);
  const imageResponse: any = axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${props.term}&per_page=24&format=json&nojsoncallback=1`
    )
    .then((response) => setImages(response));

  return (
    <PhotoContextProvider.Provider value={{ images }}>
      {props.children}
    </PhotoContextProvider.Provider>
  );
};

export default PhotoContext;
