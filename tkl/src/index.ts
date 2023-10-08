import { fetchScheduled } from './api';

const url = window.location.href; // Get the current URL
const pubName = url.split('/')[3]; // Extract the publication ID
console.log(pubName); // Output: the-kraken-lore

class Publication {
  constructor() {
    const url = window.location.href;
    const slug = url.split('/')[3];
    console.log(fetchScheduled(slug));
  }
}
