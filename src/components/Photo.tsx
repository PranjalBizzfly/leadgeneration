import Image from "next/image";
import type { ReactNode } from "react";
import { IMAGES } from "@/content/images";

interface Props {
  /** Public path from docs/image-prompts, e.g. "/images/pages/home--about-pipeline.webp". */
  file: string;
  sizes: string;
  className?: string;
  preload?: boolean;
  /** Rendered when the image has not been imported yet. */
  fallback?: ReactNode;
  /** Decorative background use: empty alt so screen readers skip it. */
  decorative?: boolean;
  fill?: boolean;
}

/** Shows an imported photo with its prompt-derived alt text, or the fallback until it exists. */
export function Photo({ file, sizes, className = "", preload, fallback = null, decorative, fill }: Props) {
  const img = IMAGES[file];
  if (!img) return <>{fallback}</>;
  const alt = decorative ? "" : img.alt;
  return fill ? (
    <Image src={img.src} alt={alt} fill quality={90} sizes={sizes} preload={preload} className={`object-cover ${className}`} />
  ) : (
    <Image src={img.src} alt={alt} width={1600} height={1000} quality={90} sizes={sizes} preload={preload} className={`block h-auto w-full ${className}`} />
  );
}

export const hasPhoto = (file: string) => Boolean(IMAGES[file]);
