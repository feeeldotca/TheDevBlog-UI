export interface UpdatePostRequest {
    title: string | undefined;
    content: string | undefined;
    summary: string | undefined;
    urlHandle: string | undefined;
    visible: boolean | undefined;
    publishDate: string | undefined;
    updateDate: string | undefined;
    featuredImageUrl: string | undefined;
}