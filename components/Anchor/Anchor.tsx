import { AnchorProps } from './types';

const Anchor:React.FunctionComponent<AnchorProps> = ({ href, name }):React.ReactElement => <a href={ href } className="anchor">{ name }</a>;

Anchor.displayName = "Anchor";

export default Anchor;