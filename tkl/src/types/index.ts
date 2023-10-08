interface Image {
  imageId: string;
  filter: string;
  backgroundSize: string;
  originalWidth: number;
  originalHeight: number;
  strategy: string;
  height: number;
  width: number;
}

interface Metadata {
  followerCount: number;
  activeAt: number;
}

interface Permissions {
  canPublish: boolean;
  canPublishAll: boolean;
  canRepublish: boolean;
  canRemove: boolean;
  canManageAll: boolean;
  canSubmit: boolean;
  canEditPosts: boolean;
}

interface Virtuals {
  permissions: Permissions;
}

interface Collection {
  id: string;
  name: string;
  slug: string;
  tags: string[];
  creatorId: string;
  description: string;
  shortDescription: string;
  image: Image;
  metadata: Metadata;
  virtuals: Virtuals;
}

interface Payload {
  collection: Collection;
}

interface Response {
  success: boolean;
  payload: Payload;
}
