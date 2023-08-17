"use client";
import React from 'react'
import { Button } from './ui/button';
import { Menu } from "lucide-react"

export const MobileSidebar = () => {
  return (
    <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
    </Button>
  )
}
