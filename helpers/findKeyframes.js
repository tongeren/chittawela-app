
// Search the CSSOM for a specific keyframe rule with given name
const findKeyframes = name => {
    // Use spread operator to create an array of sheets from the StyleSheetList
    const sheets = [ ...document.styleSheets];

    // The StyleSheet with href null is our stylesheet, which is a CSSStyleSheet
    const sheet = sheets.filter(sheet => sheet.href === null)[0];

    // Use spread operator to create an array of rules from the CSSRuleList
    const rules = [ ...sheet.cssRules];

    // Filter out the keyframes with the required given name
    const keyframes = rules.filter(rule => (rule.name === name));
    
    // Return the keyframes
    return keyframes; 
};    

export default findKeyframes;


