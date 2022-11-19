import { useContext } from 'react';

import ThemeContext from '../../../../../../../../../themes';
import { TrackAuthorBlock } from './TrackAuthorComponents/TrackAuthorBlock';
import { TrackAuthorLink } from './TrackAuthorComponents/TrackAuthorLink';

function TrackAuthor({ author }) {
    const { themeMode } = useContext(ThemeContext);

    return (
        <TrackAuthorBlock>
            <TrackAuthorLink style={themeMode.main}>{author}</TrackAuthorLink>
        </TrackAuthorBlock>
    );
}

export default TrackAuthor;
