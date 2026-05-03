
export type JsonApiRelationship = {
    [key: string]: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: JsonApiData<any> | JsonApiData<any>[] | null;
    } | null;
};

export type JsonApiData<T> = {
    id: string;
    type: string;
    attributes: T;
    relationships: JsonApiRelationship | null;
};

export interface JsonApiResponse<T = unknown, I = unknown> {
    data: JsonApiData<T> | JsonApiData<T>[] | null;
    included?: JsonApiData<I> | JsonApiData<I>[] | null;
}

