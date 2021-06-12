import { useHistory } from 'react-router-dom';

function Success() {

    const history = useHistory();

    const handleClick = () => {

        history.push('/');

    }

    return(

        <>

            <h2>Success!</h2>
            <p>Your review has been successfully submitted. Thank you!</p>
            <button
                onClick={handleClick}>
                    Back to home
            </button>
        
        </>

    ) // end return

} // end Success fn

export default Success;