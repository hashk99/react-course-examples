import { useContext } from 'react'
import CartContext from '../../../store/cart-context'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = props =>{

    const price = `$${props.price}`
    const cartCtx = useContext(CartContext)

    const addToCartHandler = amount => {
        cartCtx.addItem(
            {id: props.id, name: props.name, amount,
        price: props.price})
    }

    return <li className={classes.meal}>
        <div >
            <div><h3>{props.name}</h3></div>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
    </li>
}

export default MealItem