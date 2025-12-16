import { test, expect } from '@playwright/test'

test.describe('testing move down button different ways', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('https://morvayne1.github.io/react-to-do-app/')
        const input = page.getByPlaceholder('Enter a task...')
        const enter = page.getByRole('button', {name: "Enter"})
        //before each test we add a tasks to test
        await input.fill('Go walk a dog')
        await enter.click()
        await input.fill('Take shower')
        await enter.click()
        await input.fill('Do homework')
        await enter.click()
        //check if all tasks appear
        await expect(page.getByText('Go walk a dog')).toBeVisible()
        await expect(page.getByText('Take shower')).toBeVisible()
        await expect(page.getByText('Do homework')).toBeVisible()
    })

    test('move task down untill it become last', async ({page}) => {
        const taskToTest = page.locator('li').filter({hasText:"Go walk a dog"})
        const downButton = taskToTest.getByRole('button', {name: "Down"})
        //assing every task to variables to check order
        let tasks = await page.locator('.taskText').allTextContents()
        let task1 = tasks.indexOf('Go walk a dog')
        let task2 = tasks.indexOf('Take shower')
        let task3 = tasks.indexOf('Do homework')

        await downButton.click()
        //reassing cause of changing order
        tasks = await page.locator('.taskText').allTextContents()
        task1 = tasks.indexOf('Go walk a dog')
        task2 = tasks.indexOf('Take shower')
        task3 = tasks.indexOf('Do homework')

        expect(task2).toBeLessThan(task1)

        await downButton.click()

        tasks = await page.locator('.taskText').allTextContents()
        task1 = tasks.indexOf('Go walk a dog')
        task2 = tasks.indexOf('Take shower')
        task3 = tasks.indexOf('Do homework')

        expect(task3).toBeLessThan(task1)
        
    })

    test('check if we can move the last task down', async ({page}) => {
        const lastTask = page.locator('li').filter({hasText: "Do homework"})
        const downButton = lastTask.getByRole('button', {name: "Down"})
        //we found "Down" button of the first task and it should be disabled
        expect(downButton).toBeDisabled()
    })
})
