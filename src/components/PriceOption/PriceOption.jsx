import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-blue-600 rounded-md p-4 text-white flex flex-col'>
            <h2 className='text-center'>
                <span className='text-6xl font-bold'>{price}</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h4 className='text-2xl text-center my-8'>{name}</h4>
            <div className='pl-5 flex-grow'>
            {
                features.map((feature, idx) => <Feature key={idx} feature ={feature}></Feature> )
            }
            </div>
            <button className='mt-10 bg-green-700 w-full py-4 font-bold rounded-lg hover:bg-green-900'>Choose Plan</button>
        </div>
    );
};

PriceOption.proptypes = {
    option: PropTypes.object
}

export default PriceOption;