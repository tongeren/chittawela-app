import PropTypes from 'prop-types';

// hoc
import restrictToClient from '../../hoc/restrictToClient';
import withWindowDimensions from '../../hoc/withWindowDimensions';

// import useOwnHeight from '../hooks/useOwnHeight';
// import calcClipHeight from '../helper/calcClipHeight';
// import toUnits from '../helper/toUnits';

{/*
const getStyle =(src, height, clip ) => {
    const total = height + clip;
    console.log("total", total);

    const H = toUnits(height, "px");
    const C = toUnits(clip, "px");
    const T = toUnits(total, "px");

    return {
        height: T,
        backgroundColor: 'blue',
        //backgroundImage: `url(${ src })`,
        backgroundSize: 'cover',
        clipPath: `polygon(0 ${ T }, 100vw ${ H }, 100vw 0, 0 ${ C })`
    };
};
*/}

const Section = ({ id, children, src, windowWidth }) => {
    {/*
    console.log("Section: windowWidth", windowWidth);
    console.log("Section: calcClipHeight(windowWidth)", calcClipHeight(windowWidth));
    console.log("Section: useOwnHeight(layoutId)", useOwnHeight(layoutId));
    const style = src ? getStyle(src, useOwnHeight(layoutId), calcClipHeight(windowWidth)) : null;
    */}
    return (        
        <section id={ id } className="section" >
            { children }
        </section>
    );
};

export default withWindowDimensions(restrictToClient(Section));

Section.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node.isRequired,
    src: PropTypes.string
};