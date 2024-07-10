'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";


export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full border border-gray-900 dark:border-gray-50  bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text"
    >
      {theme === 'dark' ? <MdOutlineWbSunny size={20} /> : <IoMoon size={20} />}
    </button>
  )
}