import { useState } from "react"
import { Link } from "react-router-dom";
import { Data } from "../../data/data";
function Gadgets() {
  const [data, setData] = useState(Data)


  const [filterData, setFilterData] = useState(data)
  const uniqueCategories = [...new Set(data.map(product => product.category))];
  const handleFilterCategory = (category) => {
    let tempData;
    if (category == "all") {
      tempData = data
    } else {
      tempData = data.filter(e => e.category == category)
    }

    setFilterData(tempData)
  }
  return (
    <div className="w-10/12  mx-auto mb-8  mt-96">
      <div>
        <h1 className="font-bold text-center text-5xl mb-12">Explore Cutting-Edge Gadgets</h1>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3 space-y-4 p-4 bg-white rounded-lg shadow-md">
            <div>
              <button
                onClick={() => handleFilterCategory("all")}
                className="w-full p-3  bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold rounded-full shadow-md"
              >
                All Product
              </button>
            </div>
            {uniqueCategories.map((e, index) => (
              <div key={index}>
                <button
                  onClick={() => handleFilterCategory(e)}
                  className="w-full p-3 bg-gray-100  hover:bg-gradient-to-r from-purple-500 to-purple-700 hover:text-white  text-gray-700 font-medium rounded-full shadow-sm hover:bg-gray-200 transition-all"
                >
                  {e}
                </button>
              </div>
            ))}
          </div>

          <div className="col-span-9">
            <div className="grid grid-cols-3 gap-4">
              {
                filterData.map(e => <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
                  <img
                    className="w-full h-48 object-cover"
                    src={e.product_image}
                    alt="Product Image"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">{e.product_title}</h2>
                    <p className="text-lg text-gray-600 font-medium m-4">${e.price}</p>
                    <Link to={`/product/${e.product_id}`} className="mt-4 w-full border-2 border-purple-500 text-purple-500 
                    p-2 rounded-full font-bold  hover:bg-purple-500 hover:text-white transition-all">
                      View Details
                    </Link>
                  </div>
                </div>
                )
              }

            </div>


          </div>
        </div>

      </div>
    </div>
  )
}

export default Gadgets