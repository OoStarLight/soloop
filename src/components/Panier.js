import React, { Component } from 'react'
import './Panier.css'
export default class Panier extends Component {
render() {
    return (
    <div>

        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-8">
                    <div className='bg-articles'>
                        <div className='shop-cont'>
                        <h2 className='shopping'>Shopping</h2>
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <div className='total-cont'>
                        <h2 className='text-center pt-5 total'>Total</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
    )
}
}
