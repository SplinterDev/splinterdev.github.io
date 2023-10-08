import { fetchScheduled } from './api';
import { Collection } from './types/collection';
import { Post } from './types/post';

class Publication {
  collection?: Collection;

  constructor() {
    this.init();
  }

  async init() {
    const url = window.location.href;
    const slug = url.split('/')[3];
    const scheduledData = await fetchScheduled(slug);
    Object.values(scheduledData.payload.references.Post).forEach(
      (post: Post) => {
        console.log(post.id, post.title);
      }
    );
  }
}

const publication = new Publication();
