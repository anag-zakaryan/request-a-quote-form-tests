import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,            // Browser will open
    slowMo: 500,                 // Slow down actions by 500ms
    screenshot: 'only-on-failure',  // Screenshot if test fails
    video: 'retain-on-failure',     // Save video if test fails
    trace: 'retain-on-failure',     // Save trace if test fails
  },
  retries: 0,                      // No retries if test fails
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
});