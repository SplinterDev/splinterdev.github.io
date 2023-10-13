import { fetchScheduled } from './api';
import feather from 'feather-icons';
import { TKLPost } from './types/tkl';
import { formatData } from './utils/data';
import { appendElement } from './utils/html';
import dayjs from 'dayjs';
import { SLOTS, getSlotsForCurrentWeek } from './utils/date';

class TKL {
  $container?: HTMLDivElement;
  $loader?: HTMLDivElement;
  posts: TKLPost[] = [];
  icons = {
    loader: feather.icons['loader'].toSvg(),
  };

  constructor() {
    console.log('Summoning the Kraken');

    this.createTKLContainer();
    this.fetchData().then(() => {
      this.createScheduleTable();
    });

    // getSlotsForCurrentWeek(0).map((day) =>
    //   day.map((slot) =>
    //     console.log(
    //       slot,
    //       slot.getTime() > new Date().getTime(),
    //       slot.getTimezoneOffset() / 60
    //     )
    //   )
    // );
  }

  async fetchData() {
    const url = window.location.href;
    const slug = url.split('/')[3];
    let scheduledData = await fetchScheduled(slug);
    const posts: TKLPost[] = [...formatData(scheduledData)];

    while (scheduledData.payload.paging.next) {
      scheduledData = await fetchScheduled(
        slug,
        'scheduled',
        scheduledData.payload.paging.next
      );
      if (!scheduledData.payload.references.Post) {
        break;
      }
      const formattedData = formatData(scheduledData);
      posts.push(...formattedData);
    }

    this.posts = posts;
    this.setLoading(false);
    console.log(this.posts);
  }

  createScheduleTable() {
    const table = appendElement(this.$container!) as HTMLDivElement;

    const slots = getSlotsForCurrentWeek(0);

    slots.forEach((day) => {
      if (day[SLOTS.length - 1].getTime() > new Date().getTime()) {
        const dayContainer = appendElement(table, {
          className: 'tkl-day',
          textContent: dayjs(day[0]).format('dddd, MMMM D, YYYY'),
        });
        day.forEach((slot) => {
          if (slot.getTime() > new Date().getTime()) {
            appendElement(dayContainer, {
              className: 'tkl-slot',
              textContent: dayjs(slot).format('h:mm A'),
            });

            const scheduledPost = this.posts.find((post) => {
              return post.scheduledAt === slot.getTime();
            });
            appendElement(dayContainer, {
              className: 'tkl-post',
              textContent: scheduledPost ? scheduledPost.title : 'Free',
            });
          }
        });
      }
    });

    // for (const post of this.posts) {
    //   const postContainer = appendElement(table);
    //   appendElement(postContainer, {
    //     tag: 'h3',
    //     textContent: post.title,
    //   });
    //   appendElement(postContainer, {
    //     tag: 'span',
    //     className: [
    //       'ds-link',
    //       'ds-link--styleSubtle',
    //       'link--accent',
    //       'u-accentColor--textNormal',
    //       'u-accentColor--textDarken',
    //     ],
    //     // {author name} - {scheduledAt as "weekday, month, day, year, time, timezone using Intl API}
    //     textContent: `${post.author.name} - ${dayjs(post.scheduledAt).format(
    //       'dddd, MMMM D, YYYY, h:mm A'
    //     )}`,
    //   });
    // }
  }

  createTKLContainer() {
    const heroTitle = document.querySelector('.hero-title.u-flex1');
    if (!heroTitle?.parentElement?.parentElement) {
      throw new Error('No hero title found');
    }

    const container = appendElement(heroTitle.parentElement.parentElement, {
      id: 'tkl-container',
      className: 'tkl',
    });
    const loader = appendElement(container, {
      className: 'u-animation--shimmerInfinite',
      textContent: 'The Kraken is working...',
    });

    // container.innerHTML = this.icons.loader;

    this.$container = container as HTMLDivElement;
    this.$loader = loader as HTMLDivElement;
  }

  setLoading(isLoading: boolean) {
    if (!this.$loader) {
      return;
    }

    if (isLoading) {
      this.$loader.style.display = 'block';
    } else {
      this.$loader.style.display = 'none';
    }
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
