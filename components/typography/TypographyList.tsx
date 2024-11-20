//? Exemple d'utilisation:
//* const items = ["Item 1", "Item 2", "Item 3"];
//* <TypographyList items={items} />

export function TypographyList({ items }: { items: string[] }) {
    return (
        <ul className="m-1 [&>li]:mt-1 text-sm">
            {items.map((item, index) => (
                <li key={index}>- {item}</li>
            ))}
        </ul>
    );
}