import { expect } from '@playwright/test';

export const yourNameInput = (page) =>
  page.locator('//form[@id="subscriptionForm"]//input[@id="name"]');
export const emailInput = (page) =>
  page.locator('//form[@id="subscriptionForm"]//input[@id="email"]');
export const serviceSelect = (page) =>
  page.locator('//form[@id="subscriptionForm"]//select[@id="service"]');
export const subscriptionForm = (page) =>
  page.locator('//form[@id="subscriptionForm"]');
export const businessRadio = (page) =>
  page.locator('//form[@id="subscriptionForm"]//input[@value="Business"]');
export const personalRadio = (page) =>
  page.locator('//form[@id="subscriptionForm"]//input[@value="Personal"]');
export const cashCheckbox = (page) =>
  page.locator('//form[@id="subscriptionForm"]//input[@value="Cash"]');
export const cardCheckbox = (page) =>
  page.locator('//form[@id="subscriptionForm"]//input[@value="Card"]');
export const cryptocurrencyCheckbox = (page) =>
  page.locator('//form[@id="subscriptionForm"]//input[@value="Cryptocurrency"]');
export const messageInput = (page) =>
  page.locator('//form[@id="subscriptionForm"]//textarea[@id="message"]');
export const requestAQuoteButton = (page) =>
  page.locator('//form[@id="subscriptionForm"]//button');

// 1. Positive Test (Happy Path)

export async function ValidationOfTheRequestAQuoteFormWithCorrectData(page) {
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
  await yourNameInput(page).fill('Anag');
  await expect(yourNameInput(page)).toHaveAttribute('class', /is-valid/);
  await emailInput(page).focus();
  await emailInput(page).fill('anag@example.com');
  await expect(emailInput(page)).toHaveAttribute('class', /is-valid/);
  await serviceSelect(page).click();
  await serviceSelect(page).selectOption({ value: 'C Service' });
  await expect(serviceSelect(page)).toHaveAttribute('class', /is-valid/);
  await messageInput(page).focus();
  await messageInput(page).fill('Hello world!');
  await expect(messageInput(page)).toHaveAttribute('class', /is-valid/);
}