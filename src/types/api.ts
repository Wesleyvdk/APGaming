// Team types
export interface Game {
    id: string;
    name: string;
}

export interface Player {
    id: string;
    firstName: string;
    lastName: string;
    inGameName: string;
    role: string;
    rank: string;
    country: string;
    socialLinks?: Record<string, string>;
    trackerLinks?: Record<string, string>;
    teams?: Team[];
    createdAt: string;
    updatedAt: string;
}

export interface Team {
    id: string;
    name: string;
    game: Game;
    players?: Player[];
    playerCount?: number;
    createdAt: string;
    updatedAt: string;
}

// News types
export interface Author {
    id: string;
    username: string;
    profilePicture: string | null;
}

export interface Tag {
    id: string;
    name: string;
    articleCount?: number;
}

export interface NewsArticle {
    id: string;
    title: string;
    content?: string;
    author: Author;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    tags: Tag[];
    featuredImage: string | null;
    mediaItems?: any[];
}

// API Response types
export interface GetAllTeamsResponse {
    teams: Team[];
}

export interface GetTeamByIdResponse {
    team: Team;
}

export interface GetAllPlayersResponse {
    players: Player[];
}

export interface GetPlayerByIdResponse {
    player: Player;
}

export interface GetAllNewsArticlesResponse {
    articles: NewsArticle[];
}

export interface GetNewsArticleByIdResponse {
    article: NewsArticle;
}

export interface GetNewsTagsResponse {
    tags: Tag[];
}
