import DefaultTheme from 'vitepress/theme'
import MyVPLayout from "../../../components/vitepress-extensions/MyVPLayout.vue";
import './custom.css'
import './tailwind.postcss'

export default {
	extends: DefaultTheme,
	Layout: MyVPLayout,
}

