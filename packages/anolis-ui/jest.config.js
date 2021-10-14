const config = {
  testEnvironment: "jest-environment-jsdom",
  extensionsToTreatAsEsm: [".ts"],
  modulePaths: ["<rootDir>/src"],
  snapshotSerializers: ["@emotion/jest/serializer"]
};

module.exports = config;
