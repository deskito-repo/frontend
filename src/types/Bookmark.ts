export const bookmarkType = {
  FILE: 0,
  FOLDER: 1,
};

export interface Bookmark {
    type: typeof bookmarkType[keyof typeof bookmarkType];
    title: string;
    link?: string;
    atUpdated: Date;
    iconUrl?: string;
}

export type BookmarkFile = Required<Bookmark> & Record<'type', typeof bookmarkType.FILE>;
export type BookmarkFolder = Omit<Bookmark, 'link'> & Record<'type', typeof bookmarkType.FOLDER>;
