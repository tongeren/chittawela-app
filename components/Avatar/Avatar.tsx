import { AvatarProps } from './types';

const Avatar:React.FunctionComponent<AvatarProps> = ({ src, alt, margin }):React.ReactElement => {
    const classes = "avatar".concat(" ", margin ? `u-margin-bottom-${ margin }`: "");

    return (
        <div className={ classes }>
            <div className="avatar__photo">
                <img className="avatar__img" src={ src } alt={ alt } />
            </div>
        </div>
    );
};

export default Avatar;

