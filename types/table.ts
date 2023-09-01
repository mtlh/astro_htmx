import type { team } from "./team"

export interface standings {
    type: string,
    group: null,
    stage: string,
    table : {
        won: number,
        draw: number,
        form: null,
        lost: number,
        team: team,
        points: number,
        goalsFor: number,
        position: number,
        playedGames: number,
        goalsAgainst: number,
        goalDifference: number
    }[]
}