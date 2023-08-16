import Transfer from './Transfer/Transfer'
import TreeMenu from './TreeMenu'
import MenuItem from './TreeMenu/menuItem.vue'
import SubMenu from './TreeMenu/SubMenu.vue'
import ReSubMenu from './TreeMenu/ReSubMenu.vue'

const components = {
    Transfer,
    TreeMenu,
    MenuItem,
    SubMenu,
    ReSubMenu
}

export default {
    install(app) {
        for (let comp in components) {
            app.component(comp, components[comp])
        }
    }
}