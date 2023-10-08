import { fetchScheduled } from './api';
import { Collection } from './types/collection';

class Publication {
  collection?: Collection;

  constructor() {
    this.init();
  }

  async init() {
    const url = window.location.href;
    const slug = url.split('/')[3];
    const scheduledData = await fetchScheduled(slug);
  }
}

const publication = new Publication();
