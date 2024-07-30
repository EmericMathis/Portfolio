import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"

interface ContextMenuProps {
    children: React.ReactNode;
}

const MenuContext = ({ children }: ContextMenuProps) => {


    return (
        <ContextMenu>
            <ContextMenuTrigger className="flex-grow container">
                {children}
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem>Contacter</ContextMenuItem>
                <ContextMenuItem>Recruter</ContextMenuItem>
                <ContextMenuItem>Mon parcours</ContextMenuItem>
                <ContextMenuItem>Portfolio</ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>

    );
};

export default MenuContext;