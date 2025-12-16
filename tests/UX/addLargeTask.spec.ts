import { test, expect } from '@playwright/test'

test('trying to add an empty string', async ({page}) => {
    page.goto("https://morvayne1.github.io/react-to-do-app/")
    const input = page.getByPlaceholder('Enter a task...')
    const enter = page.getByRole('button', { name: "Enter"})
    const largeTask = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'.repeat(30)
    //add a new task
    await input.fill(largeTask)
    await enter.click()
    //find a new task
    const task = page.locator('li')
    .filter({hasText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'})
    //check if it is apper
    await expect(task).toBeVisible()
    //check if all text apper
    const taskText = page.locator('.taskText')
    await expect(taskText).toHaveText(largeTask)
    //check if there is no horizontal scroll (UI work correctly)
    await expect(page.locator('body')).not.toHaveCSS('overflow-x', 'scroll');
})