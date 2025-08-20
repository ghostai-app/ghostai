import { Config } from "jest";

const config: Config = {
  rootDir: "./",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/test/mocks/fileMock.js",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default config;
