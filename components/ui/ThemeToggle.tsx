import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <Button variant="link" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'light' ? <SunIcon className="w-6" /> : <MoonIcon className="w-6" />}
        </Button>
    )
}