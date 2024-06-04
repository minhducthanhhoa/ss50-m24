import React from 'react'
import "./Products.css"
import { useNavigate } from 'react-router-dom'

export default function Products() {
    let products = [
        {
            id:1,
            name:"mèn mén 1",
            price:5000,
            image:"https://static-images.vnncdn.net/files/publish/2023/3/20/men-men-ha-giang-1-1441.jpg"
        },
        {
            id:2,
            name:"mèn mén 2",
            price:6000,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskTveFEgv10CzbWoF-OLmnlG5Z5AruOgoKQ&s"
        },
        {
            id:3,
            name:"mèn mén 3",
            price:7000,
            image:"https://static-images.vnncdn.net/files/publish/2023/3/20/men-men-dac-san-ha-giang-xuan-phuong-1442.jpg"
        },
    ]
    const navigate = useNavigate();
    const handleClickDetail = (id:number) =>{
        navigate(`/productdetail/${id}`);
    }
  return (
    <div className='container'>Products
        {products.map((item) =>{
            return (
                <div>
                    <p>Tên {item.name}</p>
                    <p><img src={item.image} alt='' /></p>
                    <p>Giá {item.price}</p>
                    <button>Mua</button>
                    <button onClick={() => handleClickDetail(item.id)}>Chi tiết sản phẩm</button>
                </div>
            )
        })}
    </div>
  )
}
