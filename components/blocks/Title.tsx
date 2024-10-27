import { TypographyH2 } from "../typography/TypographyH2";
import { TypographyH3 } from "../typography/TypographyH3";


const Title = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <div>
            <TypographyH2>{title}</TypographyH2>
            <TypographyH3>{subtitle}</TypographyH3>
        </div>
    );
};

export default Title;