import React, { useContext } from "react";
import PhotoContext from "./PhotoContext";

export interface ItemProps {
  props: any;
}

const Item: React.FC<ItemProps> = (props) => {
  const images: any = useContext(PhotoContext);
  console.log(images);
  if (images.length > 0) {
    return images.map((image: any) => {
      return <div>Test</div>;
    });
  } else return null;
};

export default Item;
