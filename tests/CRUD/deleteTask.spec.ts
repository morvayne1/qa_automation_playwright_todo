import { test, expect } from '@playwright/test'

test('remove a task', async ({page}) => {
    await page.goto("https://morvayne1.github.io/react-to-do-app/")
    const task = await page.getByPlaceholder('Enter a task...').fill('Go walk with my dog')
    await page.getByRole('button', {name: "Enter"}).click()

    await expect(page.getByText('Go walk with my dog')).toBeVisible()

    await page.getByRole('button', {name: 'Remove'}).click()
    
    await expect(page.getByText('Go walk with my dog')).toBeHidden()

})
