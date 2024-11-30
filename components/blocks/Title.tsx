import { FadeX } from "../animation/FadeX";
import { TypographyH2 } from "../typography/TypographyH2";
import { TypographyH3 } from "../typography/TypographyH3";


const Title = ({ title, subtitle, id, className }: { title: string, subtitle: string, id?: string, className?: string; }) => {
    return (
        <div id={id} className={className}>
            <FadeX><TypographyH2>{title}</TypographyH2>
                <TypographyH3>{subtitle}</TypographyH3></FadeX>
        </div>
    );
};

export default Title;