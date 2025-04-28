import { test } from '@playwright/test';
import { ValidationOfTheRequestAQuoteFormWithCorrectData } from '../suites/ValidationOfTheRequestAQuoteFormWithCorrectData';


test.describe('Request A Quote Form - Happy Path', () => {
    test('TC-001: Validate form with correct data', async ({ page }) => {
      await ValidationOfTheRequestAQuoteFormWithCorrectData(page);
    });
  });