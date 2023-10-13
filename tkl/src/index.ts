import { fetchScheduled } from './api';
import { Post } from './types/post';
import feather from 'feather-icons';
import { TKLPost } from './types/tkl';
import { formatData } from './utils/data';

class TKL {
  $container?: HTMLDivElement;
  posts: TKLPost[] = [];
  icons = {
    loader: feather.icons['loader'].toSvg(),
  };

  constructor() {
    this.createTKLContainer();
    this.fetchData();
  }

  async fetchData() {
    const url = window.location.href;
    const slug = url.split('/')[3];
    let scheduledData = await fetchScheduled(slug);
    // Object.values(scheduledData.payload.references.Post).forEach(
    //   (post: Post) => {
    //     console.log(post.id, post.title);
    //   }
    // );
    const posts: TKLPost[] = [...formatData(scheduledData)];
    console.log('got', posts.length, 'posts');

    while (scheduledData.payload.paging.next) {
      console.log('fetching more', scheduledData.payload.paging.next.from);

      scheduledData = await fetchScheduled(
        slug,
        'scheduled',
        scheduledData.payload.paging.next
      );
      if (!scheduledData.payload.references.Post) {
        console.log('no more posts');
        break;
      }
      const formattedData = formatData(scheduledData);
      console.log('got', formattedData.length, 'posts');
      posts.push(...formattedData);
    }

    this.posts = posts;
    console.log(this.posts);
  }

  createTKLContainer() {
    const heroTitle = document.querySelector('.hero-title.u-flex1');
    if (!heroTitle?.parentElement?.parentElement) {
      throw new Error('No hero title found');
    }
    const container = document.createElement('div');
    container.id = 'tkl-container';
    container.classList.add('tkl');
    // container.innerHTML = this.icons.loader;

    heroTitle.parentElement.parentElement.insertBefore(
      container,
      heroTitle.parentElement.nextSibling
    );
    this.$container = container;
  }
}

declare global {
  interface Window {
    tkl?: TKL;
  }
}

if (window.tkl) {
  console.log('TKL found, deleting existing instance');
  window.tkl = undefined;
  const tklContainer = document.querySelector('#tkl-container');
  if (tklContainer) {
    tklContainer.remove();
  }
}

console.log('Creating new TKL instance');
window.tkl = new TKL();
