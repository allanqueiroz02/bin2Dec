import type { Config } from "jest";

const config: Config = {
  globals: {
    fetch,
  },
  preset: "ts-jest",
  injectGlobals: true,
  watchAll: false,
  logHeapUsage: true,
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/?(*.)+(test).[jt]s?(x)"],
  transform: {
    "^.+\\.(ts|tsx)?$": [
      "ts-jest",
      {
        tsconfig: true,
        useESM: true
      },
    ],
    "^.+\\.(js|jsx|mjs)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@hookform/resolvers|@truckpag/components))",
  ],
  unmockedModulePathPatterns: ["\\.csv"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|csv)$":
      "<rootDir>/src/mocks/fileMock.js",
    "\\.(css|less)$": "<rootDir>/src/mocks/styleMock.js",
  },
  modulePaths: ["<rootDir>/src"],
  coveragePathIgnorePatterns: [
    "service-worker.js",
    "reportWebVitals.js",
    "serviceWorkerRegistration.js",
    "store/index.js",
    "util/makeDataForTest.js",
  ],
  collectCoverageFrom: [
    "src/**/*.[jt]s?(x)",
    "!src/**/*.stories.[jt]s?(x)",
    "!src/**/__tests__/*",
  ],
  coverageReporters: ["html", "text", "text-summary", "cobertura", "json"],
};

export default config;
