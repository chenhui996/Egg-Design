import Menu from './menu';
import MenuItem from './menuItem';
import SubMenu from './subMenu';
var TransMenu = Menu;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;
export default TransMenu;
