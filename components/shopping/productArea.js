import React from 'react';
import './productArea.css';
import img1 from '../../assets/pic1.png';
import img2 from '../../assets/img2.jpg';
import Products from '../shopping/products';

const ProductArea = (props) =>{
    console.log(props.products);
    return(
        <div className='productArea'> 
            <div id="carouselExampleIndicators" className="carousel slide size" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner size">
                    <div className="carousel-item active">
                        <img src={img1} style={{height:'420px',width:'1180px',margin:'30px'}} className="d-block" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block" alt="..." style={{height:'420px',margin:'30px',width:'1180px'}}/>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block" alt="..." style={{height:'420px',margin:'30px',width:'1180px'}}/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <Products products={props.products}/>
        </div>
    );
}

export default ProductArea;