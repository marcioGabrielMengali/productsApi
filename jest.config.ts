import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}"
  ],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/shared/enums/",
    "tests/"
  ],
};

export default config;
