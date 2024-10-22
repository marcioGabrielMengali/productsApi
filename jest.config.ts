import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/shared/enums/",
    "tests/",
    "<rootDir>/src/server.ts",
    "\\.interface\\.ts$",
  ],
  testPathIgnorePatterns: ["\\.interface\\.ts$"],
  moduleNameMapper: {
    "^@shared/(.*)$": "<rootDir>/src/shared/$1",
    "^@modules/(.*)$": "<rootDir>/src/modules/$1",
    "^@test/(.*)$": "<rootDir>/tests/$1",
  },
};

export default config;
