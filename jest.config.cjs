const { createDefaultPreset } = require('ts-jest');

const tsJestTransformCfg = createDefaultPreset().transform;

module.exports = {
    testEnvironment: 'node',
    transform: { ...tsJestTransformCfg },
    moduleNameMapper: {
        '^@config/(.*)$': '<rootDir>/src/config/$1'
    }
};
