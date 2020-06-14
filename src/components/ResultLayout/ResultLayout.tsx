import { ResultLayoutProps } from './types';

const ResultLayout:React.FunctionComponent<ResultLayoutProps> = ({ results }):React.ReactElement => {
    return (
        <div className="result-layout">
            { results.map((result, key) => 
                <div key={ key } className="result">
                    { result }
                </div>
            )}
        </div>
    );
};

ResultLayout.displayName = "ResultLayout";

export default ResultLayout;

