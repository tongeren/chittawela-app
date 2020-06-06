const insertKeyFrameRules = (cssText: string):void => {
    // Use spread operator to create an array of sheets from the StyleSheetList
    const sheets:StyleSheet[] = [ ...document.styleSheets];
    // console.log("insertKeyFrameRules: sheets", sheets);
    // The StyleSheet where href includes "_next" is one of our stylesheets, which is a CSSStyleSheet
    const sheet:CSSStyleSheet = sheets.filter(sheet => sheet.href?.includes("_next"))[0] as CSSStyleSheet;
    // const sheet:CSSStyleSheet = sheets.filter(sheet => sheet.href === null)[0] as CSSStyleSheet;
    // console.log("insertKeyFrameRules: sheet", sheet);
    // Insert the keyframe rules
    sheet.insertRule("@keyframes " + cssText, 1);
    sheet.insertRule("@-webkit-keyframes " + cssText, 1);
};

export default insertKeyFrameRules;