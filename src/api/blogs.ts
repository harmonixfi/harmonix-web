
import apiFetch from '@/lib/api';
import { BlogPostResponse } from '@/types/blogs';

const PARAGRAPH_API = process.env.NEXT_PUBLIC_PARAGRAPH_API_PUBLIC;

export const getBlogsFromParagraph = async (publicationId: string, limit: number = 10) => {
  return await apiFetch<BlogPostResponse>(`/api/v1/publications/${publicationId}/posts?limit=${limit}`, {
    method: 'GET',
  }, PARAGRAPH_API);
};
