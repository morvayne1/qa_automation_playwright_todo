import { test, expect } from '@playwright/test'
import { count } from 'node:console'

test('click enter button 30 times', async ({page}) => {
    await page.goto('https://morvayne1.github.io/react-to-do-app/')
    const input = page.getByPlaceholder('Enter a task...')
    const enter = page.getByRole('button', {name: "Enter"})

    await input.fill('test')
    await enter.click({clickCount: 30})

    await expect(page.locator('.taskText')).toHaveText('test')
})