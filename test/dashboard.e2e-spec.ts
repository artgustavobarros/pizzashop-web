import { expect, test } from '@playwright/test'

test('display month revenue metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.locator('span').filter({ hasText: 'R$ 20,00' })).toBeVisible()
  expect(page.getByText('+10% em relação a ontem')).toBeVisible()
})

test('display month orders amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true }).first()).toBeVisible()
  expect(
    page
      .locator('div')
      .filter({ hasText: /^Pedidos \(mês\)20 -5% em relação a ontem$/ })
      .getByRole('paragraph'),
  ).toBeVisible()
})

test('display month orders canceled amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true }).nth(2)).toBeVisible()
  expect(page.getByText('-7% em relação a ontem')).toBeVisible()
})

test('display days orders amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true }).nth(1)).toBeVisible()
  expect(
    page
      .locator('div')
      .filter({ hasText: /^Pedidos \(dia\)20 -5% em relação a ontem$/ })
      .getByRole('paragraph'),
  ).toBeVisible()
})
