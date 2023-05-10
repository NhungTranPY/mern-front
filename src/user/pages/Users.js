import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Nina',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Lpx9j83qR_cfQuaPHuvwWQHaHw%26pid%3DApi&f=1&ipt=cf51ef808ead22afc21e701042356e32a25de2905302fa0236ae34b72d3de653&ipo=images',
            places: 3
        }
    ]

    return (
        <UsersList items={USERS} />
    )
}

export default Users