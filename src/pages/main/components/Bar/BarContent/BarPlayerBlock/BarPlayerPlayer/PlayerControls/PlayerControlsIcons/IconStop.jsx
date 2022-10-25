import styled from 'styled-components';

import { Svg } from './SvgIconSample';

const SvgPlayStop = styled(Svg)``;

export const IconStop = ({ alt }) => (
    <SvgPlayStop
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 15 20"
        width="22px"
        height="20px"
        alt={alt}
    >
        <rect width="5" height="19" fill="#D9D9D9" />
        <rect x="10" width="5" height="19" fill="#D9D9D9" />
    </SvgPlayStop>
);
