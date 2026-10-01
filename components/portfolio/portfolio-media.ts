import type { StaticImageData } from "next/image";
import portrait from "@/public/images/musharraf-editorial.webp";
import revizer from "@/public/projects/revizer-cover.webp";
import greenloom from "@/public/projects/greenloom-cover-v3.webp";
import snaplock from "@/public/projects/snaplock-cover.webp";
import mistribulao from "@/public/projects/mistribulao-cover.webp";
import millet from "@/public/projects/millet-cover.webp";
import filmCover from "@/public/projects/revizer-film-cover.webp";
import filmPoster from "@/public/videos/revizer/product-film-poster.webp";

export { portrait, filmCover, filmPoster };
export const projectCovers: Record<string, StaticImageData> = {
  revizer,
  greenloom,
  snaplock,
  mistribulao,
  millet,
};
