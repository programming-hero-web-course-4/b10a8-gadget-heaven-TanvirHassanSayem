import axios from "axios";
import { useState, useEffect } from "react"
import { BarChart, Bar} from 'recharts';
function Phones() {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    };
                    return obj;
                });
                console.log(phonesWithFakeData);
                setPhones(phonesWithFakeData);
            });
    }, []);

    return (
        <div>
            <h2 className="text-2xl text-center">
                Phones: {phones.length}
            </h2>
         <BarChart width={550} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
        </div>
    );
}
export default Phones