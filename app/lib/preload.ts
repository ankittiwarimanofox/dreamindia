import ReactDOM from "react-dom";
import { imgSrc, imgSrcSet, type ImageKey } from "./images";

/** Preload a page's hero image (the LCP element) with high priority. Call from a server component. */
export function preloadHero(key: ImageKey, width = 960) {
  ReactDOM.preload(imgSrc(key, width), {
    as: "image",
    imageSrcSet: imgSrcSet(key),
    imageSizes: "100vw",
    fetchPriority: "high",
  });
}
