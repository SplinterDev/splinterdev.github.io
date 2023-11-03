import create from 'zustand';
import { TKLPost } from '../types/tkl';
import { fetchScheduled } from '../api';
import { formatData } from '../utils/data';

interface PostsStore {
  isReady: boolean;
  scheduledPosts: TKLPost[];
  loading: boolean;
  setLoading: (loading: boolean) => void;
  fetchScheduledPosts: () => Promise<void>;
  bootUp: () => Promise<void>;
}

const usePostsStore = create<PostsStore>((set) => ({
  isReady: false,
  scheduledPosts: [],
  loading: true,
  setLoading: (loading) => set(() => ({ loading })),
  fetchScheduledPosts: async () => {
    try {
      let scheduledData = await fetchScheduled();
      const scheduledPosts: TKLPost[] = [...formatData(scheduledData)];

      while (scheduledData.payload.paging.next) {
        scheduledData = await fetchScheduled(
          'scheduled',
          scheduledData.payload.paging.next
        );
        if (!scheduledData.payload.references.Post) {
          break;
        }
        const formattedData = formatData(scheduledData);
        scheduledPosts.push(...formattedData);
      }

      set(() => ({ scheduledPosts: scheduledPosts, loading: false }));
    } catch (error) {
      console.error(error);
      set(() => ({ loading: false }));
    }
  },
  bootUp: async () => {
    set(() => ({ isReady: false, posts: [], loading: true }));
    await usePostsStore.getState().fetchScheduledPosts();
    set(() => ({ isReady: true }));
  },
}));

export default usePostsStore;
