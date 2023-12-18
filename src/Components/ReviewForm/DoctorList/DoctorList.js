import Popup from 'reactjs-popup';
import GiveReviews from './GiveReviews/GiveReviews';

const DoctorList = ({name, speciality}) => {
    var counter = 0;

    return (
        <tr className="table-row">
                <td>{counter++}</td>
                <td>{name}</td>
                <td>{speciality}</td>
                <td>
                    <Popup
                        style={{ backgroundColor: '#FFFFFF' }}
                        trigger={
                            <button className="review-button">Click here</button>
                        }
                        modal
                        open={showModal}
                        onClose={() => setShowModal(false)}
                    >
                    {(close) => (
                        <GiveReviews/>
                    )}
                </td>
                <td></td>
        </tr>
    )
}
export default DoctorList;