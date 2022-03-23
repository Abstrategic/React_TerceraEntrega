import './Item.css'
import Userlogin from '../Userlogin/Userlogin';

const Item = ({productName, description, imgUrl}) => (
    <div className='item-shop'>
        <img className="img-item" src={imgUrl} alt="Italian Trulli" />
        <h2>{productName}</h2>
        <p className="content-item">{description}</p>
        <Userlogin cta ="Read More"/>
    </div>
)
    export default Item;