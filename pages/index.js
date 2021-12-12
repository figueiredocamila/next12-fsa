import Link from 'next/link';

const Home = () => {
    return (
        <>
            <h1>Home!</h1>
            <p>
                <Link href='/about'>
                    <a>About</a>
                </Link>
            </p>
            <p>
                <Link href='/contact'>
                    <a>Contact</a>
                </Link>
            </p>
        </>
    )
}

export default Home;