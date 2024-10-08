//? Exemple d'utilisation: 
//* const headers = ["King's Treasury", "People's happiness"];
//* const data = [
//*   ["Empty", "Overflowing"],
//*   ["Modest", "Satisfied"],
//*   ["Full", "Ecstatic"]
//* ];
//* <TypographyTable headers={headers} data={data} />

export function TypographyTable({ headers, data }: { headers: string[]; data: Array<Array<string>> }) {
    return (
        <div className="my-6 w-full overflow-y-auto">
            <table className="w-full">
                <thead>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="m-0 border-t p-0 even:bg-muted">
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}