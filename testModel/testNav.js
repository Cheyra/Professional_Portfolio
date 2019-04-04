import {Selector, ClientFunction} from 'testcafe'

class Navigation {
    aboutLink = Selector('body > container > div > div.col-md-3.px-1.sections.text-center.mx-auto.about > span')
    portfolioLink = Selector('body > container > div > div.col-md-3.px-1.sections.text-center.mx-auto.portfolio > span')
    contactLink = Selector('body > container > div > div.col-md-3.px-1.sections.text-center.mx-auto.contact > span')
    getCurrentUrl = ClientFunction(() => {
        return window.location.href
    })
}

export default Navigation
