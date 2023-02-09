import favouritesArray from "./favouritesArray";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const addFavourite = (fav) => {
  if (favouritesArray.includes(fav)) {
    toast("The article has already been added to favourites!");
  } else {
    favouritesArray.push(fav);
    toast("Article is added to favourites!");
  }
};
export default addFavourite;
