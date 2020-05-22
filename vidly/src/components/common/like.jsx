import React from 'react';

// get our fontawesome imports
import * as FASolid from "@fortawesome/free-solid-svg-icons";
import * as FARegular from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Like = (props) => {
    let faIcon = FARegular.faHeart;
    if (props.liked) {
        faIcon = FASolid.faHeart;
    }
    return (<FontAwesomeIcon icon={faIcon} style={{ cursor: "pointer" }} onClick={props.onClick} />);
}

export default Like;
