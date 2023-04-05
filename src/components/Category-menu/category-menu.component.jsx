import CategoryItem from "../category-item/category-item.component"
import "./category-menu.style.scss"
import "../category-item/category-item.styles.scss"

const MenuItems = ({categories}) =>{
    return(
    <div className="categories-container">
      {categories.map((category) => ( 
        <CategoryItem key={category.id} category={category}/>
    ))}

  </div>
    ) 
}

export default MenuItems;