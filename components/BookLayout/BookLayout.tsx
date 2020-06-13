import { BookLayoutProps } from './types';

const BookLayout:React.FunctionComponent<BookLayoutProps> = ({ left, right }):React.ReactElement => {
    return (
        <div className="book-layout">
            <div className="book-layout__left">{ left }</div>
            <div className="book-layout__right">{ right }</div>            
        </div>
    );
};

BookLayout.displayName = "BookLayout";

export default BookLayout;

