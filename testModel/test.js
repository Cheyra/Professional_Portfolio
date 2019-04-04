import Navigation from "./testNav.js"
import {Selector} from 'testcafe'

fixture('Cheyra\'s portfolio')
.page `https://cheyra.github.io/Professional_Portfolio/`

test('Portfolio click should show portfolio section', async t => {
    await t
    .click('body')
        .expect(Selector('#name-title').innerText).eql("Creator: Cheyra Dickinson")
    .click('Navigation.portfolioLink')
        .expect(Selector('body > div.jumbotron.portfolio-content.mx-auto.text-center.mt-0 > h2').innerText).eql("Key Projects")
    
})