import axios from 'axios';
import { MediumResponse } from '../types';

type Endpoint = 'scheduled' | 'submissions' | 'published';

export async function fetchScheduled(
  slug: string,
  endpoint: Endpoint = 'scheduled',
  next?: MediumResponse['payload']['paging']['next']
): Promise<MediumResponse> {
  let url = `https://medium.com/${slug}/stories/${endpoint}`;
  if (next) {
    url = `https://medium.com/${slug}/stories/${endpoint}/loadMore?limit=10&from=${next.from}`;
  }

  const headers = {
    Accept: 'application/json',
  };

  try {
    const response = await axios.get(url, { headers });
    const cleanedText = response.data.replace('])}while(1);</x>', ''); // Remove the prefix
    const data = JSON.parse(cleanedText); // Parse the cleaned text into a JSON object
    return data; // Return the fetched data
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}
