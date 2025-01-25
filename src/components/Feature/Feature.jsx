import { FaCheckCircle } from "react-icons/fa";
import PropTypes from "prop-types"
function Feature( {feature}) {
  return (
    <div>
       <p className="flex items-center mt-4">
        <FaCheckCircle className="text-green-500"> 
             </FaCheckCircle> {feature}</p>
    </div>
  )
}

Feature.propTypes ={
    feature: PropTypes.string
}
export default Feature;