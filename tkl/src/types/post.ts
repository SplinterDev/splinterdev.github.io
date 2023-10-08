import { ImageMetadata } from './collection';
import { CoverImage, Tag } from './tag';

type PreviewImage = {
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
};

type MixtapeMetadata = {
  mediaResourceId: string;
  thumbnailImageId: string;
  href: string;
};

type Paragraph = {
  name: string;
  type: number;
  text: string;
  layout?: number;
  metadata?: CoverImage;
  markups?: {
    type: number;
    start: number;
    end: number;
    href?: string;
    title?: string;
    rel?: string;
    anchorType?: number;
    userId?: string;
  }[];
  hasDropCap?: boolean;
  mixtapeMetadata?: MixtapeMetadata;
  alignment?: number;
};

type Section = {
  startIndex: number;
  name?: string;
};

type BodyModel = {
  paragraphs: Paragraph[];
  sections: Section[];
};

type PreviewContent = {
  bodyModel: BodyModel;
  isFullContent: boolean;
  subtitle: string;
};

type UserPostRelation = {
  userId: string;
  postId: string;
  readAt: number;
  readLaterAddedAt: number;
  votedAt: number;
  collaboratorAddedAt: number;
  notesAddedAt: number;
  subscribedAt: number;
  lastReadSectionName: string;
  lastReadVersionId: string;
  lastReadAt: number;
  lastReadParagraphName: string;
  lastReadPercentage: number;
  viewedAt: number;
  presentedCountInResponseManagement: number;
  clapCount: number;
  seriesUpdateNotifsOptedInAt: number;
  queuedAt: number;
  seriesFirstViewedAt: number;
  presentedCountInStream: number;
  seriesLastViewedAt: number;
  audioProgressSec: number;
};

export type Post = {
  id: string;
  versionId: string;
  creatorId: string;
  homeCollectionId: string;
  title: string;
  detectedLanguage: string;
  latestVersion: string;
  latestPublishedVersion: string;
  hasUnpublishedEdits: boolean;
  latestRev: number;
  createdAt: number;
  updatedAt: number;
  acceptedAt: number;
  firstPublishedAt: number;
  latestPublishedAt: number;
  vote: boolean;
  experimentalCss: string;
  displayAuthor: string;
  content: {
    subtitle: string;
    postDisplay: {
      coverless: boolean;
    };
  };
  virtuals: {
    statusForCollection: string;
    allowNotes: boolean;
    previewImage: PreviewImage;
    wordCount: number;
    imageCount: number;
    readingTime: number;
    subtitle: string;
    userPostRelation?: UserPostRelation;
    publishedInCount: number;
    usersBySocialRecommends: any[];
    noIndex: boolean;
    recommends: number;
    isBookmarked: boolean;
    tags: Tag[];
    socialRecommendsCount: number;
    responsesCreatedCount: number;
    isLockedPreviewOnly: boolean;
    metaDescription: string;
    totalClapCount: number;
    sectionCount: number;
    readingList: number;
    topics: any[];
  };
  coverless: boolean;
  slug: string;
  translationSourcePostId: string;
  translationSourceCreatorId: string;
  isApprovedTranslation: boolean;
  inResponseToPostId: string;
  inResponseToRemovedAt: number;
  isTitleSynthesized: boolean;
  allowResponses: boolean;
  importedUrl: string;
  importedPublishedAt: number;
  visibility: number;
  uniqueSlug: string;
  previewContent: PreviewContent;
  license: number;
  inResponseToMediaResourceId: string;
  canonicalUrl: string;
  approvedHomeCollectionId: string;
  isNewsletter: boolean;
  newsletterId: string;
  webCanonicalUrl: string;
  mediumUrl: string;
  migrationId: string;
  notifyFollowers: boolean;
  notifyTwitter: boolean;
  notifyFacebook: boolean;
  responseHiddenOnParentPostAt: number;
  isSeries: boolean;
  isSubscriptionLocked: boolean;
  seriesLastAppendedAt: number;
  audioVersionDurationSec: number;
  sequenceId: string;
  isEligibleForRevenue: boolean;
  isBlockedFromHightower: boolean;
  deletedAt: number;
  lockedPostSource: number;
  hightowerMinimumGuaranteeStartsAt: number;
  hightowerMinimumGuaranteeEndsAt: number;
  featureLockRequestAcceptedAt: number;
  mongerRequestType: number;
  layerCake: number;
  socialTitle: string;
  socialDek: string;
  editorialPreviewTitle: string;
  editorialPreviewDek: string;
  curationEligibleAt: number;
  isProxyPost: boolean;
  proxyPostFaviconUrl: string;
  proxyPostProviderName: string;
  proxyPostType: number;
  isSuspended: boolean;
  isLimitedState: boolean;
  seoTitle: string;
  previewContent2: PreviewContent;
  cardType: number;
  isDistributionAlertDismissed: boolean;
  isShortform: boolean;
  shortformType: number;
  responsesLocked: boolean;
  isLockedResponse: boolean;
  isPublishToEmail: boolean;
  responseDistribution: number;
  isMarkedPaywallOnly: boolean;
  type: string;
};
