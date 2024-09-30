module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
    },
    transformIgnorePatterns: [
        "node_modules/(?!(axios)/)" // Explicitly allow transforming axios
    ],
    // moduleNameMapper: {
    //     "^axios$": require.resolve('axios'), // Map axios to a resolved path
    // },
};