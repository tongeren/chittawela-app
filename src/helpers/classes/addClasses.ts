export type Classes = string | string[];

// Add extra css classes to a className string
const addClasses = (existing: string, extra: Classes):string => {
    // Convert a single css class into a array
    if (typeof extra === 'string') extra = [ extra ];  

    const reducer = (acc, val) => acc.concat(" ", val);
    extra.push(existing);

    return extra.reduce(reducer);
};

export default addClasses; 