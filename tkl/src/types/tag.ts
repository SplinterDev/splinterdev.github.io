export type CoverImage = {
  id: string;
  originalWidth?: number;
  originalHeight?: number;
  isFeatured?: boolean;
  alt?: string;
  unsplashPhotoId?: string;
  backgroundSize?: string;
  filter?: string;
  externalSrc?: string;
  focusPercentX?: number;
  focusPercentY?: number;
  repairedAt?: number;
};

type Metadata = {
  postCount: number;
  coverImage: CoverImage;
};

export type Tag = {
  slug: string;
  name: string;
  postCount: number;
  metadata: Metadata;
  type: string;
};
