import axios from 'axios';
import { MediumResponse } from '../types';

type Endpoint = 'scheduled' | 'submissions' | 'published';

export async function fetchScheduled(
  slug: string,
  endpoint: Endpoint = 'scheduled'
): Promise<MediumResponse> {
  const url = `https://medium.com/${slug}/stories/${endpoint}`;

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
