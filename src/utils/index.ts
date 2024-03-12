import { IMAGES_BASE_URL } from "../config";

type TImageSize = "Small" | "Medium";

export const getImagePreview = (
  ingredient: string = "Chicken",
  type: TImageSize = "Small"
) => `${IMAGES_BASE_URL}${ingredient}${type ? "-" + type : ``}.png`;
