import { test, expect } from '@playwright/test'

test('create a new task', async ({page}) => {
    await page.goto("https://morvayne1.github.io/react-to-do-app/")
    const task = await page.getByPlaceholder('Enter a task...').fill('Go walk with my dog')
    await page.getByRole('button', {name: "Enter"}).click()

    await expect(page.getByText('Go walk with my dog')).toBeVisible()
})
