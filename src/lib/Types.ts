export interface Account {
    id: string,
    githubId: string,
    name: string,
    admin: boolean,
    image: string
}

export interface BasicSponsor {
    id: string,
    name: string,
}

export interface Sponsor extends BasicSponsor {
    image_url: string,
    summary: string,
    website_url?: string,
    github_user?: string,
    twitter_handle?: string,
    subreddit?: string,
    discord?: string
}

export interface BaseRepository {
    repository_id: string;
    name: string;
    owner: string;
    ownerHtmlUrl: string;
    ownerAvatarUrl: string;
    url: string;
    description?: string;
    stars: number;
    openIssues: number;
    updatedAt: string
}
export interface Repository extends BaseRepository {
    id: string;
    sponsored: boolean;
    sponsor?: string;
}

export type Left<T> = {
    left: T;
    right?: never;
};

export type Right<U> = {
    left?: never;
    right: U;
};

export type Either<T, U> = NonNullable<Left<T> | Right<U>>;