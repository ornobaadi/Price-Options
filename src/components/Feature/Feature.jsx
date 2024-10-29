import PropTypes from 'prop-types'
import { IoIosCheckmarkCircle } from "react-icons/io";


const Feature = ({feature}) => {

    return (
        <div>
            <p className='flex items-center'> <IoIosCheckmarkCircle className='text-green-500 mr-2' />
            {feature}</p>
        </div>
    );
};

Feature.proptypes = {
    feature: PropTypes.string
}

export default Feature;