import { useHistory } from 'react-router-dom';

function Home() {

    const history = useHistory();

    const handleClick = () => {
        history.push('/feeling');
    }

    return (
        <>

            <h2>Let's get started!</h2>

            <button
                onClick={handleClick}>
                Click here
            </button>

        </>

    ) // end return

} // end Home fn

export default Home;