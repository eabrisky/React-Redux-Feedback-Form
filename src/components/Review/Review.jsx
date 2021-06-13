import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

function Review() {

    const dispatch = useDispatch();
    const history = useHistory();

    const results = useSelector( store => store.feedbackReducer );

    console.log( results );

    const dataObject = {

        feeling: Number(results.feeling),
        understanding: Number(results.understanding),
        support: Number(results.support),
        comments: results.comments

    };

    const handleClick = ( event ) => {

        event.preventDefault();

        console.log(dataObject);

        axios.post( '/feedback', dataObject )
        .then( response => {
            //clear state
            dispatch({
                type : 'CLEAR_FEEDBACK'
            })
        }) // end .then
        .catch( err => {
            console.log( err );
        }) // end .catch, end axios.post

        history.push( '/success' );

    }

    return(
        
        <>

            <h2>Review Your Feedback</h2>

            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{results.feeling}</td>
                        <td>{results.understanding}</td>
                        <td>{results.support}</td>
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