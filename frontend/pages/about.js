import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';

let items = ["/blackpink_dark.png", "/suicideboys.jpg", "/blackpink_pink.jpg", "doja.jpg", "olivia.jpg", "the-weeknd.jpg", "lana-del-rey.jpg"];
let itemList = items.map((item, index) => {
    return <Carousel.Item interval={3000} img={item} style={{ width: 1920, height: 1080 }} alt={index}>
        <img
            className="d-block w-100"
            src={item}
            alt={index}
            style={{ width: 1920, height: 1080 }}
        />
    </Carousel.Item>
})

export default function About() {
    return (
        <div class="text-center">
            <h1><Link href="/index">Home</Link></h1>
            <div>
                <Carousel pause={false}>
                    {itemList}
                </Carousel>
                <h1 style={{textAlign:"center", transformY:"50%", top: "50%", position:"fixed"}}>Spotify Together</h1>
            </div>
        </div>
    )
}
