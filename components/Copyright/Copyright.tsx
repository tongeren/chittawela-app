import SVGIcon from '../SVG/SVG';
import { CopyrightProps } from './types';

const Copyright:React.FunctionComponent<CopyrightProps> = ({ name, period }):React.ReactElement => 
    <footer className="copyright">
        <div className="copyright__copyright">
            <span>Copyright</span>
            <SVGIcon sprite="copyright" classes="copyright__icon"/>
            <span>{ period + " " + name }.</span>
        </div>
        <div className="copyright__rights">&nbsp;All rights reserved.</div>
    </footer>;

Copyright.displayName = "Copyright";

export default Copyright;