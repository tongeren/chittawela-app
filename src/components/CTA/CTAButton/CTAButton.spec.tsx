import { render, fireEvent } from 'test-utils';
import { useStore } from '../../StoreProvider/StoreProvider';
import CTAButton from './CTAButton';

const TEXT = "Click me!";
const testProps = { cta: TEXT };

describe('CTAButton:', () => {
    it('store.ui.playHeroVideo is set to true after onClick is triggered', () => {
        const { getByText } = render(<CTAButton { ...testProps } />);

        fireEvent.click(getByText(TEXT))
        
        const store = useStore();

    })
})