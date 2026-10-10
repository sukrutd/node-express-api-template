import { createDefaultPreset } from 'ts-jest';

const tsJestTransformCfg = createDefaultPreset().transform;

const config: import('jest').Config = {
    testEnvironment: 'node',
    transform: { ...tsJestTransformCfg },
    moduleNameMapper: {
        '^@config/(.*)$': '<rootDir>/src/config/$1'
    }
};

export default config;
