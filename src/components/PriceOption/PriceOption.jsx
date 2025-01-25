import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
  const {name, price, features} = option;
  return (
   
      <div className="bg-blue-100 p-4 rounded-md mt-2 flex flex-col ">
        <h2 className="text-5xl text-pretty text-center">
          <span className="text-7xl">{price}</span>
          <span className="text-2xl">/mon</span>
        </h2>
        <h4 className="text-3xl">{name}</h4>    
       <div className="flex-grow">
       {
        features.map((feature, index) => <Feature key={index} feature={feature}></Feature>
        )
        }
       </div>
       <button className="w-full mt-4 text-white bg-green-400 rounded-md hover:bg-yellow-500">
        Buy Now
       </button>
      </div>
    
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
