import React from 'react';
import { useObserver } from 'mobx-react-lite';
import MenuButton from '../MenuButton/MenuButton';
import MenuNav from '../MenuNav/MenuNav';
import LogoBox from '../LogoBox/LogoBox';
import restrictToClient from '../../hoc/restrictToClient/restrictToClient';
import { useResponsive } from '../../hooks/useResponsive/useResponsive';
import { ResponsiveState } from '../../hooks/useResponsive/types'
import { useStore } from '../StoreProvider/StoreProvider';
// import { useStore } from '../../stores/stores';
import { NavBarProps } from './types';

const NavBar: React.FunctionComponent<NavBarProps> = ({flex, name, navItems, lastButton}): React.ReactElement => {
    const responsive = useResponsive();
    const store = useStore();
    
    if (!(responsive===null)) store.client.setResponsiveState(responsive);

    // Server still able to render by reading responsive state from the store
    const render = responsive === "undetermined" ? store.client.responsive as ResponsiveState: responsive; 

    // Animate the navbar after the button animation ends
    // const classes = store.animations.addNavBarAnimation()
    // console.log("NavBar: classes", classes);
    const renderMenu = (responsive: ResponsiveState) => {
        switch (responsive) {
            case "portrait": {
                return <MenuButton navItems={ navItems } lastButton={ lastButton } />;
            }
            case "landscape": {
                return <MenuNav menu={ true } navItems={ navItems } flex={ flex } lastButton={ lastButton } />;
            }
            case "undetermined": {
                return null;
            }
        }
    };

    return useObserver( () => (        
            <div className={ store.animations.addNavBarAnimation() }
                // style={ style }
            >
                <LogoBox flex={ flex } name={ name } />
                { renderMenu(render) }
            </div>   
    ));
};

export default restrictToClient(NavBar);


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

    // debugText = (up, passed) => {
    //     const text = passed ? "show the navbar" : (up ? "show gold navbar" : "show the navbar");
    //     return text;
    // };
    
    // addNavbarAnimation = () => {
    //     const sheet = [ ...document.styleSheets].filter(sheet => sheet.href === null)[0];

    //     console.log(sheet);
    // }


    // handleScroll = (event) => {
    //     this.setState( prevState => ({
    //         prevScrollY: prevState.currScrollY,
    //         currScrollY: event.target.scrollTop
    //     }));
    // };

    // scrollingUp = state => {
    //     const up = (state.prevScrollY < state.currScrollY);
    //     return up;
    // };

    // passedHeader = (props, state) => {
    //     const hero = document.getElementById("hero");
    //     if (hero === null) { return !passed };

    //     const height = document.getElementById("hero").getBoundingClientRect().height;
    //     const clip = calcClipHeight(props.windowWidth);
    //     const rightHeaderHight = height - clip;

    //     const passed = (state.currScrollY > rightHeaderHight);

    //     return passed;
    // };

   