const { defineConfig } = require("cypress");
const fs = require("fs");
const createBundler = require("@bahmutov/cypress-esbuildpreprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypresscucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumberpreprocessor/esbuild");
module.exports = defineConfig({
 // Enable video recording so failed runs can keep videos
 video: true,
 // Clear screenshots/videos before each run
 //trashAssetsBeforeRuns: true,
 e2e: {
 // Match Cucumber feature files as test specs
 specPattern: "**/*.feature",
 async setupNodeEvents(on, config) {
 // Register Cucumber preprocessor plugin
 await addCucumberPreprocessorPlugin(on, config);
 // Use esbuild to preprocess .feature step files
 on("file:preprocessor", createBundler({ plugins:
[createEsbuildPlugin(config)] }));
 // Remove videos for passing specs; keep only failed-spec videos
 on("after:spec", (_spec, results) => {
 const hasFailures = (results?.stats?.failures ?? 0) > 0;
 const videoPath = results?.video;
 if (!hasFailures && videoPath && fs.existsSync(videoPath)) {
 fs.unlinkSync(videoPath);
 }
 });
 return config;
 },
 },
}); 