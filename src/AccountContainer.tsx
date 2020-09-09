import React from 'react';
import './AccountContainer.scss';

type AccountContainerProps = {
    img: string
    userName: string
    caption: string
    children?: React.ReactNode
}

export default function AccountContainer({ img, userName, caption, children }: AccountContainerProps) {
    return <div className="AccountContainer">

        <img className="profile_img account" src={"./images/" + img} alt="profile" />
        <div>
            <div className="user_name">{userName}</div>
            <div className="user_caption">{caption}</div>
        </div>
        {children}
    </div>
}