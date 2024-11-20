import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react"

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <Button className="rounded-full" variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'light' ? <SunIcon className="w-6" /> : <MoonIcon className="w-6" />}
        </Button>
    )
}