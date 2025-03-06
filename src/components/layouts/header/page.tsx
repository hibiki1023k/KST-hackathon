'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { User } from "lucide-react";
import CustomButton from "@/components/CustomButton/page";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <header className="w-full h-16 px-4 py-2 bg-blue-500/24 shadow-md">
      <nav className="h-full mx-auto flex justify-between items-center">
        <div className="flex gap-4">
        <Link href="/" className="text-xl font-bold flex">
          <Image src="/vercel.svg" alt="Logo" width={40} height={40} />
          <p className="text-blue-500 flex items-center pl-2">
            TKS-hackathon
          </p>
        </Link>
        </div>
        <CustomButton
        onClick={handleClick}>
          <User />
        </CustomButton>
        {isOpen && (
          <div className="absolute top-16 right-4 w-48 py-2 bg-white rounded-md shadow-xl z-20">
            <Link 
              href="/profile" 
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              プロフィール
            </Link>
            <Link 
              href="/settings" 
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              設定
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
