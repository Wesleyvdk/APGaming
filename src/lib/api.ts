const DASHBOARD_API_URL = process.env.NEXT_PUBLIC_DASHBOARD_API_URL || "https://dashboard.ap-gaming.org/api"


export async function getPublicEvents() {
    console.log("DASHBOARD_API_URL", DASHBOARD_API_URL)
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

        return await response.json()
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

