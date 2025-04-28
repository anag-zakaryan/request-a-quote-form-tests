import { expect } from '@playwright/test';
import {
    yourNameInput,
    emailInput,
    serviceSelect,
    subscriptionForm,
    businessRadio,
    personalRadio,
    cashCheckbox,
    cardCheckbox,
    cryptocurrencyCheckbox,
    messageInput,
    requestAQuoteButton
  } from '../suites/ValidationOfTheRequestAQuoteFormWithCorrectData';

//Negative case

  export async function ValidationOfRequestAQuoteFormWithInvalidDataInputs(page) {
    await page.goto('https://qatest.datasub.com/index.html');
    await page.mouse.wheel(0, 4200);
    await page.waitForTimeout(5000);
    await expect(subscriptionForm(page)).toBeVisible();
    await expect(yourNameInput(page)).toBeVisible();
    await expect(emailInput(page)).toBeVisible();
    await expect(serviceSelect(page)).toBeVisible();
    await expect(businessRadio(page)).toBeVisible();
    await expect(personalRadio(page)).toBeVisible();
    await expect(cashCheckbox(page)).toBeVisible();
    await expect(cardCheckbox(page)).toBeVisible();
    await expect(cryptocurrencyCheckbox(page)).toBeVisible();
    await expect(messageInput(page)).toBeVisible();
    await expect(requestAQuoteButton(page)).toBeVisible();
    await yourNameInput(page).focus();
    await yourNameInput(page).fill(' ');
    await expect(yourNameInput(page)).toHaveAttribute('class', /is-invalid/);
    await emailInput(page).focus();
    await emailInput(page).fill('!%^#^&$$');
    await expect(emailInput(page)).toHaveAttribute('class', /is-invalid/);
    await messageInput(page).focus();
    await messageInput(page).fill(' ');
    await expect(messageInput(page)).toHaveAttribute('class', /is-invalid/);
  }



