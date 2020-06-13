import { SectionHeadingProps } from './types';

const SectionHeading:React.FunctionComponent<SectionHeadingProps> = ({ alt, title, subtitle, color, align, margin }):React.ReactElement => {
    const classes={
        "container" : (color ? `u-text-${color}` : "")
            .concat(" ", align ? `u-text-${align}` : "")
            .concat(" ", margin ? `u-margin-bottom-${margin}` : ""),
        "heading" : "heading-secondary"
            .concat("", alt ? `-alt` : "" )
            .concat(" ", subtitle ? "u-margin-bottom-tiny": "")
    };

    return (
        <div className={ classes.container }>
            <h2 className={ classes.heading } >
                { title }
            </h2>
            { subtitle ? <em>{ subtitle }</em> : null }
        </div>
    );
};

SectionHeading.displayName = "SectionHeading";

export default SectionHeading;

