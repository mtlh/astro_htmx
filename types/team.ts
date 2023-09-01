export interface team {
    id: number,
    tla: string,
    name: string,
    crest:  string,
    shortName: string,
}

export interface referee {
    id: number,
    name: string,
    type: "REFEREE",
    nationality: string
}

export interface competition {
    id: number,
    code: string,
    name: string,
    type: "LEAGUE",
    emblem: string
}