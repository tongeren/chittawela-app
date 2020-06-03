const insertKeyFrameRules = (cssText: string):void => {
    // Use spread operator to create an array of sheets from the StyleSheetList
    const sheets:StyleSheet[] = [ ...document.styleSheets];

    // The StyleSheet with href null is our stylesheet, which is a CSSStyleSheet
    const sheet:CSSStyleSheet = sheets.filter(sheet => sheet.href === null)[0] as CSSStyleSheet;

    // Insert the keyframe rules
    sheet.insertRule("@keyframes " + cssText, 1);
    sheet.insertRule("@-webkit-keyframes " + cssText, 1);
};

export default insertKeyFrameRules;