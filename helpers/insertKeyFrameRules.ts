const insertKeyFrameRules = (cssText: string):void => {
    // Use spread operator to create an array of sheets from the StyleSheetList
    const sheets:StyleSheet[] = [ ...document.styleSheets];
    
    // The StyleSheet where href includes "_next" is one of our stylesheets, which is a CSSStyleSheet
    const environment = process.env.NODE_ENV || 'production';
    const production = (environment === "production");
    const sheet:CSSStyleSheet = production 
        ? sheets.filter(sheet => sheet.href?.includes("_next"))[0] as CSSStyleSheet
        : sheets.filter(sheet => sheet.href === null)[0] as CSSStyleSheet;
   
    // Insert the keyframe rules
    sheet.insertRule("@keyframes " + cssText, 1);
    sheet.insertRule("@-webkit-keyframes " + cssText, 1);
};

export default insertKeyFrameRules;