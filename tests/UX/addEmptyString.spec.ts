import { test, expect } from '@playwright/test'

test('trying to add an empty string', async ({page}) => {
    page.goto("https://morvayne1.github.io/react-to-do-app/")
    const input = page.getByPlaceholder('Enter a task...')
    const enter = page.getByRole('button', { name: "Enter"})

    await input.fill('')
    await enter.click()

    await expect(page.getByText('No tasks yet..')).toBeVisible()
})