import {test, expect} from '@playwright/test'

test('check if state saves after reload page', async ({page}) => {
    await page.goto('https://morvayne1.github.io/react-to-do-app/')
    const input = page.getByPlaceholder('Enter a task...')
    const enter = page.getByRole('button', {name: 'Enter'})
    //create some tasks to test
    await input.fill('Go walk a dog')
    await enter.click()
    await input.fill('Do homework')
    await enter.click()
    await input.fill('Take shower')
    await enter.click()
    //fix the content
    const tasks = await page.locator('.taskText').allTextContents()
    //reload page
    await page.reload()
    //check if state saved after reload
    expect(page.locator('.taskText').allTextContents).toEqual(tasks)
})