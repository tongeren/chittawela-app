module.exports = {
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ["<rootDir>/"],
  
    // Jest transformations 
    transform: {
      "^.*\\.(js|jsx|ts|tsx)?$": ["babel-jest"],  
      '^.+\\.css$': '<rootDir>/src/config/jest/cssTransform.js',
    },
    transformIgnorePatterns: [
        '/node_modules/',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
    testPathIgnorePatterns: ['/node_modules/','/.next/'],
  
    // Adds special extended assertions to Jest
    setupFilesAfterEnv: [ "@testing-library/jest-dom/extend-expect" ],
  
    // Test spec file resolution pattern
    // Matches parent folder `__tests__` and filename
    // should contain `test` or `spec`.
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  
    // Module file extensions for importing
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

    moduleDirectories: [
        'node_modules',
        'src/utils', 
    ],
    moduleNameMapper: {
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    },
};