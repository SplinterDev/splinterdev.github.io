import create from 'zustand';
import { TKLPost } from '../types/tkl';
import { fetchScheduled } from '../api';
import { formatData } from '../utils/data';

interface PostsStore {
  isReady: boolean;
  posts: TKLPost[];
  loading: boolean;
  setLoading: (loading: boolean) => void;
  fetchPosts: () => Promise<void>;
  bootUp: () => Promise<void>;
}

const usePostsStore = create<PostsStore>((set) => ({
  isReady: false,
  posts: [],
  loading: true,
  setLoading: (loading) => set(() => ({ loading })),
  fetchPosts: async () => {
    try {
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

      set(() => ({ posts }));
      set(() => ({ loading: false }));
    } catch (error) {
      console.error(error);
      set(() => ({ loading: false }));
    }
  },
  bootUp: async () => {
    set(() => ({ isReady: false }));
    set(() => ({ posts: [] }));
    set(() => ({ loading: true }));
    await usePostsStore.getState().fetchPosts();
    set(() => ({ isReady: true }));
  },
}));

export default usePostsStore;
