import clsx from 'clsx';

interface AngularSeparator1Props extends React.SVGProps<SVGSVGElement> {
    flipVertical?: boolean;
}

function AngularSeparator1({ flipVertical, className, ...props }: AngularSeparator1Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            fill="currentColor"
            className={clsx(className, { 'transform rotate-180': flipVertical })}
            {...props}
        >
            <path d="M0 0v100l500-48 500 48V0H0z" opacity=".5"></path>
            <path d="M0 0h1000v52H0z" opacity=".5"></path>
            <path d="M0 0v4l500 48 500-48V0H0z" opacity=".5"></path>
            <path d="M0 0v4l500 48 500-48V0H0z"></path>
        </svg>
    );
}

export default AngularSeparator1;