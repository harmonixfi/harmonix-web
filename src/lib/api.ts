const baseUrlENV = `${process.env.NEXT_PUBLIC_API_URL}/v1`;

const apiFetch = async <T>(url: string, options?: RequestInit, baseUrl?: string) => {
  baseUrl = baseUrl || baseUrlENV;
  const cache = options?.cache || 'no-store';
  const res = await fetch(`${baseUrl}${url}`, {
    ...options,
    cache,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    console.error(res);
    throw new Error('Failed to fetch data');
  }

  const data: T = await res.json();

  return data;
};

export default apiFetch;
