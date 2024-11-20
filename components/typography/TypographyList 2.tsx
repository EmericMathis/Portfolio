//? Exemple d'utilisation:
//* const items = ["Item 1", "Item 2", "Item 3"];
//* <TypographyList items={items} />

export function TypographyList({ items }: { items: string[] }) {
    return (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}