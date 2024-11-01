interface ParallaxProps {
    image: string;
    children?: React.ReactNode;
}

const Parallax: React.FC<ParallaxProps> = ({ image, children }) => {
    return (
        <div className="relative h-48 w-screen">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})`, backgroundAttachment: 'fixed' }}
            ></div>
            <div className="relative z-10 flex items-center justify-center h-full">
                {children}
            </div>
        </div>
    )
}

export default Parallax