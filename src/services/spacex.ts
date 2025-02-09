import { type Doc, type APISpaceX } from '../types/api'


export const getLaunchesBy = async ({ id }: {id: string}) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)
    const launch = (await res.json()) as Doc

    return launch
}


export const getLaunches = async () => {

    const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date: 'asc',
                },
                limit: 12,
            },
        }),
    })
    const { docs: launches } = (await res.json()) as APISpaceX
    return launches
}