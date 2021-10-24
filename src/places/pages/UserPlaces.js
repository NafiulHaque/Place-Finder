import React from "react";


import PlaceList from "../components/PlaceList";

const DAMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky screapers in the world',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myapp-c3e74.appspot.com/o/5afe8b46c08ca750f1040f62896545a5c-f1xd-w1020_h770_q80.jpg?alt=media&token=ecb1893a-f412-44ab-bfd6-dba76144fd38',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.748,
            lng: -73.98
        },
        creator: "u1"
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky screapers in the world',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myapp-c3e74.appspot.com/o/5afe8b46c08ca750f1040f62896545a5c-f1xd-w1020_h770_q80.jpg?alt=media&token=ecb1893a-f412-44ab-bfd6-dba76144fd38',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.748,
            lng: -73.98
        },
        creator: "u2"
    },

]
const UserPlaces = () => {
    return <PlaceList items={DAMMY_PLACES} />;
};

export default UserPlaces;