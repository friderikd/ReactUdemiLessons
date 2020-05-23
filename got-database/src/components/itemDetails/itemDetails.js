import React, {useState, useEffect, useRef} from 'react';
import './itemDetails.css';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage/';

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
}

function ItemDetails({itemId, getData, children}) {

    const [item, setItem] = useState([]);
    const [loading, setLoad] = useState(true);
    const [error, setError] = useState(false);

    const prevPropRef = useRef();
        useEffect(() => {
            prevPropRef.current = itemId;
        });
    const prevProp = prevPropRef.current;

    useEffect(() => {

        if (itemId !== prevProp) {

            if (!itemId) {
                return;
            }

            getData(itemId)
                .then( (data) => {
                    setItem(data);
                    setLoad(false);
                    setError(false);
                    
                })
                .catch(
                    () => {
                        console.log('error load')
                        setLoad(false);
                        setError(true);
                    }
                )
        }

    })

        if (error) {
            return <ErrorMessage/>
        } else if (!itemId) {
            return <span className='select-error'>Please select an item</span>
        }

        const {name} = item;

        if (loading) {
            return (
                <div className="item-details rounded">
                    <Spinner/>
                </div>
            )
        }

        return (
            <div className="item-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );
    }

export default ItemDetails;