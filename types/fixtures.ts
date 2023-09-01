import type { competition, referee, team } from "./team"

export interface fixtures {
    filters: {
        season: string
    },
    matches: match[] | []
}

export interface match {
    id: number,
    area: {
        id: number,
        code: string,
        flag: string,
        name: string
    },
    odds: {
        msg: string
    },
    group: null,
    score: {
        winner: "AWAY_TEAM" | "HOME_TEAM",
        duration: "REGULAR",
        fullTime: {
            away: number,
            home: number
        },
        halfTime: {
            away: number,
            home: number
        }
    }
    stage: "REGULAR_SEASON",
    season: {
        id: number,
        winner: null,
        endDate: string,
        startDate: string,
        currentMatchday: number
    },
    status: "TIMED" | "POSTPONED" | "FINISHED",
    utcDate: string,
    awayTeam: team,
    homeTeam: team,
    matchday: number,
    referees: referee,
    competition: competition,
    lastUpdated: string
}