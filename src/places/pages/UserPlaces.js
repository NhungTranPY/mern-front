import React from "react";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: "p1",
        title: 'Empire State Building',
        description: 'One of the most famous sky in the world!',
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0nfCV8dUvniRDZCyGeF_mwHaK9%26pid%3DApi&f=1&ipt=2b33d19bd5184a5f4535a5dc5d5030f6deefb7378e734a3a9af20d9e6dd90c34&ipo=images',
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: "p2",
        title: 'Empire State Building',
        description: 'One of the most famous sky in the world!',
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0nfCV8dUvniRDZCyGeF_mwHaK9%26pid%3DApi&f=1&ipt=2b33d19bd5184a5f4535a5dc5d5030f6deefb7378e734a3a9af20d9e6dd90c34&ipo=images',
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {
    return (
        <>
            <PlaceList items={DUMMY_PLACES} />
        </>
    )
}

export default UserPlaces