import { useContext } from 'react';

import ThemeContext from '../../../../themes';
import { TrackAuthorBlock } from './components/TrackAuthorBlock';
import { TrackAuthorLink } from './components/TrackAuthorLink';

const TrackAuthor = ({ author }) => {
    const { themeMode } = useContext(ThemeContext);

    return (
        <TrackAuthorBlock>
            <TrackAuthorLink style={themeMode.main}>{author}</TrackAuthorLink>
        </TrackAuthorBlock>
    );
};

export default TrackAuthor;
