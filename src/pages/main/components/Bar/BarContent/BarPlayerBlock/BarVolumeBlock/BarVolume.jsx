import BarVolumeIcon from './BarVolumeIcon';
import * as S from './StyledBarVolume';

function BarVolume() {
    return (
        <S.BarVolume>
            <S.VolumeContent>
                <S.VolumeImage>
                    <BarVolumeIcon
                        className="volume__svg"
                        alt="volume"
                    ></BarVolumeIcon>
                </S.VolumeImage>

                <S.VolumeProgressBtn>
                    <S.VolumeProgressLine />
                </S.VolumeProgressBtn>
            </S.VolumeContent>
        </S.BarVolume>
    );
}

export default BarVolume;
