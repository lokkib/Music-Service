import './PlayerControls.scss';
import PlayerControlsIcons from './PlayerControlsIcons/PlayerControlsIcons';

function PlayerControls() {
    return (
        <div className="player__controls">
            <div className="player__btn-prev">
                <PlayerControlsIcons></PlayerControlsIcons>
            </div>
            <div className="player__btn-play _btn">
                <svg className="player__btn-play-svg" alt="play">
                    <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </svg>
            </div>
            <div className="player__btn-next">
                <svg className="player__btn-next-svg" alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </svg>
            </div>
            <div className="player__btn-repeat _btn-icon">
                <svg className="player__btn-repeat-svg" alt="repeat">
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </svg>
            </div>
            <div className="player__btn-shuffle _btn-icon">
                <svg className="player__btn-shuffle-svg" alt="shuffle">
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </svg>
            </div>
        </div>
    );
}

export default PlayerControls;

// import React, { SVGProps } from 'react';

// export const AccountAddMBlackIcon = props => (
//     <svg
//         role="img"
//         focusable="false"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         {...props}
//     >
//         <g fill="none" fillRule="evenodd">
//             <path d="M0 0h24v24H0z" />
//             <path
//                 fill="#0B1F35"
//                 d="M6 20h7v-1H6c-.551 0-1-.449-1-1V3c0-.551.449-1 1-1h8.293L19 6.707V13h1V6.293L14.707 1H6c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2zm14 3v-3h3v-1h-3v-3h-1v3h-3v1h3v3z"
//             />
//         </g>
//     </svg>
// );
