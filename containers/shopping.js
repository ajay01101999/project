import React from 'react';
import ProductArea from '../components/shopping/productArea';
import Header from '../components/shopping/header';
import MenuBar from '../components/shopping/menuBar';
import axios from 'axios';

class Shopping extends React.Component{
    state = {
        products: []
    }

    componentDidMount(){
        const products = axios.get('http://localhost:1100/api/v1/latest');
        products.then(res=>{
            this.setState({products: res.data});
            console.log(this.state.products);
        }).catch(err=>{
            console.log(err);
        })
    }

    render(){
        return(
            <div className='shop'>
                <MenuBar/>
                <Header/>
                <ProductArea products={this.state.products}/>
            </div>
        );
    }
}

export default Shopping;