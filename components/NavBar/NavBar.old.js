import { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// hoc
import restrictToClient from '../../hoc/restrictToClient';
import withWindowDimensions from '../../hoc/withWindowDimensions';
import withPortrait from '../../hoc/withPortrait';

// helpers
import calcClipHeight from '../../helpers/calcClipHeight';

import MenuButton from '../MenuButton/MenuButton';
import MenuNav from '../MenuNav/MenuNav';
import LogoBox from '../LogoBox/LogoBox';

const COLOR_GOLD = "rgba(136, 113, 89, 1)";
const COLOR_WHITE = "white";

const THROTTLE_TIME = 500; // ms

class NavBar extends Component {
    state = {
        prevScrollY: 0,
        currScrollY: 0,
    };

    // constructor() {
        // add animationend to cta button
        // const ctaButton = document.getElementById('cta-button');
        // ctaButton.addEventListener("animationend", this.addNavbarAnimation)
        // first firing of eventlistener signals end of slidein of cta button
        // add animationend to navbar
        // add slide in animation for navbar
        // animationend navbar fires
        // set animation: none
        // allow changes because of scrolling
    // }

    addNavbarAnimation = () => {
        const sheet = [ ...document.styleSheets].filter(sheet => sheet.href === null)[0];

        console.log(sheet);
    }


    handleScroll = (event) => {
        this.setState( prevState => ({
            prevScrollY: prevState.currScrollY,
            currScrollY: event.target.scrollTop
        }));
    };

    scrollingUp = state => {
        const up = (state.prevScrollY < state.currScrollY);
        return up;
    };

    passedHeader = (props, state) => {
        const hero = document.getElementById("hero");
        if (hero === null) { return !passed };

        const height = document.getElementById("hero").getBoundingClientRect().height;
        const clip = calcClipHeight(props.windowWidth);
        const rightHeaderHight = height - clip;

        const passed = (state.currScrollY > rightHeaderHight);

        return passed;
    };

    // Get the styles of the navbar
    // = (., true, true)   : show gold navbar       - scroll up outside 
    // = (., true, false)  : show the navbar        - scroll up inside 
    // = (., false, true)  : hide the navbar        - scroll down outside
    // = (., false, false) : show the navbar        - scroll up inside
    getStyleProperties = (up, passed) => {
        return up ? { 
            backgroundColor: this.backgroundColorValue(passed),
            color: this.colorValue(passed)
        } : {
            display: this.displayValue(up, passed)
        };
    };

    // Return display value
    // = (false, true) : hide the navbar
    // =  else         : use the scss code to show the navbar 
    displayValue = (up, passed) => {
        return (!up && passed) ? "none" : "";
    };

    // Return background-color value
    // = true          : change the background-color to gold
    // = false         : keep the transparent background-color
    backgroundColorValue = passed => {
        return passed ? COLOR_GOLD : "";   
    };

    // Return color value
    // = true          : change the color to transparent
    // = false         : use the white color in the scss
    colorValue = passed => {
        return passed ? COLOR_WHITE : "";
    };

    debugText = (up, passed) => {
        const text = passed ? "show the navbar" : (up ? "show gold navbar" : "show the navbar");
        return text;
    };
    
    calculateDerivedState = (props, state) => {
        // Calculate derived state
        const up = this.scrollingUp(state);
        const passed = this.passedHeader(props, state);

        return { up, passed };
    };

    shouldComponentUpdate(nextProps, nextState) {
        const derivedNextState = this.calculateDerivedState(nextProps, nextState);
        const nextUp = derivedNextState.up;
        const nextPassed = derivedNextState.passed;
        
        const derivedPrevState = this.calculateDerivedState(this.props, this.state);
        const prevUp = derivedPrevState.up;
        const prevPassed = derivedPrevState.passed; 

        const update = !(nextUp === prevUp ) || !(nextPassed === prevPassed);
 
        return update;
    };

    componentDidMount() {
        window.addEventListener('scroll', _.throttle(this.handleScroll, THROTTLE_TIME), true);
    };
    
    componentWillUnmount() {
        window.removeEventListener('scroll', _.throttle(this.handleScroll, THROTTLE_TIME), true);
    };

    render() {
        const { flex, name, navItems, lastButton, isPortrait } = this.props;

        const { up, passed } = this.calculateDerivedState(this.props, this.state);

        const style = this.getStyleProperties(up, passed);

        const classes = "navbar" //.concat(" ", uiStore.ctaButtonAnimationEnd ? "navbar--animated" : "");

        return ( 
                <div 
                    className={ classes }
                    style={ style }
                >
                    <LogoBox flex={ flex } name={ name } />
                    { isPortrait ? <MenuButton navItems={ navItems } lastButton={ lastButton } /> 
                        : <MenuNav navItems={ navItems } flex={ flex } lastButton={ lastButton } /> }
                </div>
        );
    };
};

export default 
    withPortrait(
        withWindowDimensions(
            restrictToClient(NavBar)
        )
    );


NavBar.propTypes = {
    flex: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    lastButton: PropTypes.bool
};