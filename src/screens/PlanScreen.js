import React, {useState, useEffect} from 'react';
import './PlanScreen.css';

function PlanScreen() {
// use effect is used to recieve the products from the database, specifically the products that have an active susbscription
   // const [products, setProducts] = useState([]);
/*
    useEffect(()=>{
        db.collection('products')
        .where('active', '==', true)
        .get().then(querySnapshot => {
            const products = {};
            querySnapshot.forEach(async productDoc => {
                products(productDoc.id) = productDoc.data();
                const priceSnap = await productDoc.ref.collection
                ('prices').get();
                priceSnap.docs.forEach(price => {
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data()
                    }
                })
            });
            setProducts(products);
        });
    }, []);
    */
// to "map" through an object you use {Object.entries(products).map([productId, productData]) =>   }
  return (
    <div className='planScreen'>

    </div>
  )
}

export default PlanScreen;