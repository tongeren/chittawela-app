import CSS from 'csstype';

// Merge style objects
// NOTE: Later properties overwrite earlier properties with the same name!
const mergeStyles = (existing: CSS.Properties, extra: CSS.Properties):CSS.Properties => {
    return { ...existing,  ...extra};
};

export default mergeStyles; 
