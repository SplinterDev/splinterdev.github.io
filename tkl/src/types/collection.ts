import { CoverImage } from './tag';

export type ImageMetadata = {
  imageId: string;
  filter: string;
  backgroundSize: string;
  originalWidth: number;
  originalHeight: number;
  strategy: string;
  height: number;
  width: number;
  focusPercentX?: number;
  focusPercentY?: number;
  alt?: string;
};

type CollectionPermissions = {
  canPublish: boolean;
  canPublishAll: boolean;
  canRepublish: boolean;
  canRemove: boolean;
  canManageAll: boolean;
  canSubmit: boolean;
  canEditPosts: boolean;
  canAddWriters: boolean;
  canViewStats: boolean;
  canSendNewsletter: boolean;
  canViewLockedPosts: boolean;
  canViewCloaked: boolean;
  canEditOwnPosts: boolean;
  canBeAssignedAuthor: boolean;
  canEnrollInHightower: boolean;
  canLockPostsForMediumMembers: boolean;
  canLockOwnPostsForMediumMembers: boolean;
  canViewNewsletterV2Stats: boolean;
  canCreateNewsletterV3: boolean;
};

type Virtuals = {
  permissions: CollectionPermissions;
  isSubscribed: boolean;
  isEnrolledInHightower: boolean;
  isEligibleForHightower: boolean;
  isSubscribedToCollectionEmails: boolean;
  isMuted: boolean;
  canToggleEmail: boolean;
  isWriter: boolean;
};

export type Collection = {
  id: string;
  name: string;
  slug: string;
  tags: string[];
  creatorId: string;
  description: string;
  shortDescription: string;
  image: ImageMetadata;
  metadata: {
    followerCount: number;
    activeAt: number;
  };
  virtuals: Virtuals;
  logo: ImageMetadata;
  twitterUsername: string;
  publicEmail: string;
  collectionMastheadId: string;
  sections: {
    type: number;
    collectionHeaderMetadata?: {
      title: string;
      description: string;
      backgroundImage: CoverImage;
      logoImage: CoverImage;
      alignment: number;
      layout: number;
    };
    promoMetadata?: {
      sectionHeader: string;
      promoId: string;
    };
    postListMetadata?: {
      source: number;
      layout: number;
      number: number;
      postIds: string[];
      sectionHeader: string;
    };
  }[];
  tintColor: string;
  lightText: boolean;
  favicon: ImageMetadata;
  colorPalette: ColorPalette;
  navItems: {
    type: number;
    title: string;
    postId?: string;
    url: string;
    topicId?: string;
    source?: string;
  }[];
  colorBehavior: number;
  collectionFeatures: number[];
  ampLogo: ImageMetadata;
  header: {
    title: string;
    description: string;
    backgroundImage: CoverImage;
    logoImage: CoverImage;
    alignment: number;
    layout: number;
  };
  subscriberCount: number;
  tagline: string;
  isOptedIntoAurora: boolean;
  newsletterV3: {
    newsletterV3Id: string;
    type: number;
    name: string;
    description: string;
    collectionId: string;
    newsletterSlug: string;
    isSubscribed: boolean;
    showPromo: boolean;
    avatarImageId: string;
    creatorId: string;
    showNewsletterPostsInCollectionHome: boolean;
    exportableSubscribersCount: number;
    subscribersCount: number;
    promoHeadline: string;
    promoBody: string;
    replyToEmail: string;
  };
  isCurationAllowedByDefault: boolean;
  polarisCoverImage: ImageMetadata;
  ptsQualifiedAt: number;
  type: string;
};

type ColorPoint = {
  color: string;
  point: number;
};

type Spectrum = {
  colorPoints: ColorPoint[];
  backgroundColor: string;
};

type ColorPalette = {
  defaultBackgroundSpectrum: Spectrum;
  tintBackgroundSpectrum: Spectrum;
  highlightSpectrum: Spectrum;
  darkBackgroundSpectrum: Spectrum;
};
