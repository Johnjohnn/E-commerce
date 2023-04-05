import CategoryItem from "../category-item/category-item.component"
import ".category-menu.style.scss"
import '../';

const MenuItems = ({categories}) =>{
    <div className="categories-container">
      {categories.map((category) => ( 
        <CategoryItem key={category.id} category={category}/>
    ))}

  </div>
    
}

export default MenuItems;