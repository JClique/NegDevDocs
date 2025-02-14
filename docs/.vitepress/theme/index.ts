import DefaultTheme from 'vitepress/theme'
import MyVPLayout from "../../../components/vitepress-extensions/MyVPLayout.vue";
import './custom.css'

export default {
	extends: DefaultTheme,
	Layout: MyVPLayout
}

