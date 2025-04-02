import {
    GetAllTeamsResponse,
    GetTeamByIdResponse,
    GetAllPlayersResponse,
    GetPlayerByIdResponse,
    GetAllNewsArticlesResponse,
    GetNewsArticleByIdResponse,
    GetNewsTagsResponse,
    Team,
    Player,
    NewsArticle,
    Tag
} from '@/types/api';

const DASHBOARD_API_URL = process.env.NEXT_PUBLIC_DASHBOARD_API_URL || "https://dashboard.ap-gaming.org/api"

async function fetchAPI<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${DASHBOARD_API_URL}${endpoint}`);

    if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
    }

    return response.json();
}

export async function getPublicEvents() {
    try {
        const response = await fetch(`${DASHBOARD_API_URL}/public/events`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
        })

        if (!response.ok) {
            throw new Error("Failed to fetch events")
        }

        const data = await response.json();
        return await data;
    } catch (error) {
        console.error("Error fetching events:", error)
        return { events: [] }
    }
}

export async function getPublicEvent(eventId: string) {
    try {
        const response = await fetch(`${DASHBOARD_API_URL}/public/events/${eventId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
        })

        if (!response.ok) {
            throw new Error("Failed to fetch event")
        }

        return await response.json()
    } catch (error) {
        console.error("Error fetching event:", error)
        return null
    }
}

export async function registerForEvent(
    eventId: string,
    data: {
        name: string
        email: string
        wantsReminder: boolean
    },
) {
    try {
        const response = await fetch(`${DASHBOARD_API_URL}/public/events/${eventId}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        return await response.json()
    } catch (error) {
        console.error("Error registering for event:", error)
        return { success: false, error: "Failed to register for event" }
    }
}

// Teams API
export async function getAllTeams(): Promise<Team[]> {
    const data = await fetchAPI<GetAllTeamsResponse>('/public/teams');
    return data.teams;
}

export async function getTeamById(id: string): Promise<Team> {
    const data = await fetchAPI<GetTeamByIdResponse>(`/public/teams/${id}`);
    return data.team;
}

// Players API
export async function getAllPlayers(): Promise<Player[]> {
    const data = await fetchAPI<GetAllPlayersResponse>('/public/players');
    return data.players;
}

export async function getPlayerById(id: string): Promise<Player> {
    const data = await fetchAPI<GetPlayerByIdResponse>(`/public/players/${id}`);
    return data.player;
}

// News API
export async function getAllNewsArticles(): Promise<NewsArticle[]> {
    const data = await fetchAPI<GetAllNewsArticlesResponse>('/public/news');
    return data.articles;
}

export async function getNewsArticleById(id: string): Promise<NewsArticle> {
    const data = await fetchAPI<GetNewsArticleByIdResponse>(`/public/news/${id}`);
    return data.article;
}

export async function getNewsTags(): Promise<Tag[]> {
    const data = await fetchAPI<GetNewsTagsResponse>('/public/news/tags');
    return data.tags;
}
