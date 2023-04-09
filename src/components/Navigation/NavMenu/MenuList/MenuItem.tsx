import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MenuItemProps } from '../../../../@types/props/MenuItemProps';
import ThemeContext from '../../../../themes';
import { StyledMenuItem } from './StyledMenuItem';

const MenuItem = ({ navigation, content, onClick }: MenuItemProps) => {
    const { themeMode } = useContext(ThemeContext);

    return (
        <StyledMenuItem onClick={onClick && onClick}>
            <Link style={{ ...themeMode.main }} to={navigation}>
                {content}
            </Link>
            {}
        </StyledMenuItem>
    );
};

export default MenuItem;
