import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Review() {

    const history = useHistory();

    const results = useSelector( store => store.feedbackReducer);

    console.log(results);

    const handleClick = (event) => {

        event.preventDefault();

        

        history.push('/success');

    }

    return(
        
        <>

            <h2>Review Your Feedback</h2>

            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Supported</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{results.feeling}</td>
                        <td>{results.understanding}</td>
                        <td>{results.supported}</td>
                        <td>{results.comments}</td>
                    </tr>
                </tbody>
            </table>

            <button
                onClick={handleClick}>
                    Submit Results
            </button>

        </>

    ) // end return

} // end Review fn

export default Review;