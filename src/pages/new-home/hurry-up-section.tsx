"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { NavLink } from "react-router-dom"
import RoundedSlideButton from "./splash-button"

export default function HurryUpSection() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const products = [
        {
            id: 1,
            name: "Till Death Drips Hot - Eco Canvas Tote Bag",
            price: "Rs. 1,100.00",
            image: "https://flowersandsaints.com.au/cdn/shop/files/SK3.jpg?v=1745136233&width=1080",
            brand: "FLOWERS & SAINTS",
            color: "red",
        },
        {
            id: 2,
            name: "Till Death Drips Hot - Bottle",
            price: "Rs. 2,200.00",
            image: "https://flowersandsaints.com.au/cdn/shop/files/SB8.jpg?v=1744542414&width=600",
            brand: "FLOWERS & SAINTS",
            color: "black",
        },
        {
            id: 3,
            name: "Stay Humble - Eco Canvas Tote Bag",
            price: "Rs. 1,100.00",
            image: "https://flowersandsaints.com.au/cdn/shop/files/SH3_c4d8bafd-f03a-4a94-a6c9-6c1fa518124d.jpg?v=1745141996&width=1080",
            brand: "FLOWERS & SAINTS",
            color: "beige",
        },
        {
            id: 4,
            name: "Positive Vibes - Eco Canvas Tote Bag",
            price: "Rs. 1,100.00",
            image: "https://flowersandsaints.com.au/cdn/shop/files/PV3.jpg?v=1745145672&width=1080",
            brand: "FLOWERS & SAINTS",
            color: "pink",
        },
        {
            id: 5,
            name: "Love Is Blind - Eco Canvas Tote Bag",
            price: "Rs. 1,100.00",
            image: "https://flowersandsaints.com.au/cdn/shop/files/LB3.jpg?v=1745147803&width=1080",
            brand: "FLOWERS & SAINTS",
            color: "cream",
        },
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(products.length / 4))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + Math.ceil(products.length / 4)) % Math.ceil(products.length / 4))
    }

    const visibleProducts = products.slice(currentSlide * 4, currentSlide * 4 + 4)

    return (
        <div className="mb-16 ml-4">
            <div className="mb-6 flex justify-between items-center">
                <div>
                    <p className="text- md:text:4xl font-inter  text-gray-500 mb-3">Only a Few Pieces Left</p>
                    <h2 className="text-4xl font-inter  md:text-5xl font-bold">Hurry Up!</h2>
                </div>

                <div className="flex  gap-2 mr-8">
                    {/* <Button
                        variant="outline"
                        size="icon"
                        className="  rounded-full h-14 w-14 bg-red-950"
                        onClick={prevSlide}
                    >

                    </Button> */}
                    <RoundedSlideButton disabled={false}
                        onClick={prevSlide}
                        className="rounded-full h-14 border-neutral-700">
                        <ChevronLeft className="h-6 w-6 " />
                    </RoundedSlideButton>


                    {/* <Button
                        variant="outline"
                        size="icon"
                        className="  rounded-full h-14 w-14 bg-red-950"
                        onClick={nextSlide}
                    >
                        <ChevronRight className="h-5 w-5" />
                    </Button> */}
                    <RoundedSlideButton className="rounded-full h-14  border-neutral-700"
                        onClick={nextSlide}>
                        <ChevronRight className="h-6 w-6" />
                    </RoundedSlideButton>
                </div>
            </div>

            <div className="relative">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {visibleProducts.map((product) => (
                        <NavLink to="#" key={product.id} className="group">
                            <div className="overflow-hidden aspect-square rounded-2xl mb-4">
                                <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    className="w-full h-full rounded-2xl object-cover transition-transform group-hover:scale-105"
                                />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase">{product.brand}</p>
                                <h3 className="font-semibold text-xl line-clamp-2 h-14">{product.name}</h3>
                                <p className="font-medium mt-1">{product.price}</p>
                                <div className="mt-2">
                                    <div
                                        className={`w-4 h-4 rounded-full ${product.color === "red"
                                            ? "bg-red-600"
                                            : product.color === "black"
                                                ? "bg-black border border-gray-400"
                                                : product.color === "beige"
                                                    ? "bg-amber-100"
                                                    : product.color === "pink"
                                                        ? "bg-pink-300"
                                                        : "bg-amber-50"
                                            }`}
                                    ></div>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>


            </div>
        </div>
    )
}
