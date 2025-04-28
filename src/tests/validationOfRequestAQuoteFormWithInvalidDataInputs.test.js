import { test} from '@playwright/test';
import { ValidationOfRequestAQuoteFormWithInvalidDataInputs } from '../suites/ValidationOfRequestAQuoteFormWithInvalidDataInputs';

test.describe('Request A Quote Form - Negative Path', () => {
    test('TC-002: Validate form with invalid data', async ({ page }) => {
      await ValidationOfRequestAQuoteFormWithInvalidDataInputs(page);
    });
  });