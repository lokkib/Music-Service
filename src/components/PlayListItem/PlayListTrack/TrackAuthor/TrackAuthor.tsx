import { useContext } from 'react';
import { TrackAuthorProps } from '../../../../@types/props/TrackAuthorProps';

import ThemeContext from '../../../../themes';
import { TrackAuthorBlock } from './components/TrackAuthorBlock';
import { TrackAuthorLink } from './components/TrackAuthorLink';

const TrackAuthor = ({ author }: TrackAuthorProps) => {
    const { themeMode } = useContext(ThemeContext);

    return (
        <TrackAuthorBlock>
            <TrackAuthorLink style={themeMode.main}>{author}</TrackAuthorLink>
        </TrackAuthorBlock>
    );
};

export default TrackAuthor;
