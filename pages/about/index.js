import Link from 'next/link';

const About = () => {
    return (
        <>
            <h1>About!</h1>
            <p>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </p>
        </>
    )
}

export default About;