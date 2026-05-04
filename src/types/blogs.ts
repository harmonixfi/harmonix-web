export type PostItem = {
    id: string;
    title: string;
    slug: string;
    imageUrl: string;
    publishedAt: string;
    updatedAt: string;
    subtitle: string;
    staticHtml: string;
    json: string;
    markdown: string;
    coinId: string;
    categories: string[];
    authors: {
        id: string;
        publicationId: string;
        walletAddress: string;
        avatarUrl: string;
        name: string;
        bio: string;
        farcaster: {
            username: string;
            displayName: string;
            fid: number;
        };
    }[];
    authorIds: string[];
    views: number;
};
export type BlogPostResponse = {
    items: PostItem[];
    pagination: {
        hasMore: boolean;
        cursor: string;
        total: number;
    };
};
