import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
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
    const params = useParams();
    console.log(params);
    let Id = params.productId;
    console.log(Id);
    let productDetail = products.find((item) =>{
        return item.id === Number(Id);
    })
  return (
    <div>
        <p>name: {productDetail?.name}</p>
        <p><img src={productDetail?.image} alt="" /></p>
    </div>
  )
}
