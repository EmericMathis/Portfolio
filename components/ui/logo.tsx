import Link from 'next/link';

const Logo = ({ className }: any) => {

    return (
        <Link href="/" className={`my-auto font-bold text-xl ${className}`}>
            EMERIC MATHIS
        </Link>
    );
};

export default Logo;