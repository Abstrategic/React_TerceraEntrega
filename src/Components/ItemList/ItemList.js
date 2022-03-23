import Item from '../../Atoms/Item/Item';
import './ItemList.css'

const ItemList = ({products}) => {

    return (
        <div className='item-list'>
            <ul className='listContainer'>
                {products.map(product => <Item className="cardCta" key={product.id} productName={product.name} description={product.description} imgUrl={product.img} />)}
            </ul>
        </div>
    )
    }
    export default ItemList;