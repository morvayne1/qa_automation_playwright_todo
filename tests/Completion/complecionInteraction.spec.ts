import {test, expect} from '@playwright/test'

test.describe('check if reorder + completed works well with each other', () => {
    test.beforeEach(async ({page}) => {
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
        //check if all appear
        expect(await page.locator('.taskText').allTextContents())
        .toEqual(['Go walk a dog', 'Do homework', 'Take shower'])
    })

    test('reorder then complete', async ({page}) => {
        //create variables
        const taskItem = page.locator('li').filter({hasText: 'Do homework'})
        const taskText = page.locator('.taskText').filter({hasText: "Do homework"})
        const upButton = taskItem.getByRole('button', {name: "Up"})
        const downButton = taskItem.getByRole('button', {name: "Down"})
        const completeCheckbox = taskItem.getByRole('checkbox')
        
        //fixing current order
        let tasks = await page.locator('.taskText').allTextContents()
        let task1 = tasks.indexOf('Go walk a dog')
        let task2 = tasks.indexOf('Do homework')
        expect(task1).toBeLessThan(task2)
        
        await upButton.click()
        //check if button moves up
        tasks = await page.locator('.taskText').allTextContents()
        task1 = tasks.indexOf('Go walk a dog')
        task2 = tasks.indexOf('Do homework')
        expect(task2).toBeLessThan(task1)

        completeCheckbox.click()
        //check if our task has line-through 
        await expect(taskText).toHaveCSS('text-decoration', 'line-through')
        expect(task2).toBeLessThan(task1)
    })

    test('complete then reorder', async ({page}) => {
        //create variables
        const taskItem = page.locator('li').filter({hasText: 'Do homework'})
        const taskText = page.locator('.taskText').filter({hasText: "Do homework"})
        const upButton = taskItem.getByRole('button', {name: "Up"})
        const downButton = taskItem.getByRole('button', {name: "Down"})
        const completeCheckbox = taskItem.getByRole('checkbox')
        
        //fixing current order
        let tasks = await page.locator('.taskText').allTextContents()
        let task1 = tasks.indexOf('Go walk a dog')
        let task2 = tasks.indexOf('Do homework')
        expect(task1).toBeLessThan(task2)

        completeCheckbox.click()
        //check if our task has line-through 
        await expect(taskText).toHaveCSS('text-decoration', 'line-through')
        
        await upButton.click()
        //check if button moves up
        tasks = await page.locator('.taskText').allTextContents()
        task1 = tasks.indexOf('Go walk a dog')
        task2 = tasks.indexOf('Do homework')
        expect(task2).toBeLessThan(task1)
        await expect(taskText).toHaveCSS('text-decoration', 'line-through')
    })
})