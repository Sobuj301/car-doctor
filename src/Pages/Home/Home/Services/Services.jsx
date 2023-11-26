import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [Services, setServices] = useState()

    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
      <div className="mt-4">
          <div className="text-center">
            <h3 className="text-3xl text-orange-700">Services</h3>
            <h2 className="text-5xl font-bold">Our Service Area</h2>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            <div className="grid grid-cols-1 md:grid col-span-2 lg:grid-cols-3 gap-6">
               {
                Services?.map(service => <ServiceCard key={service.__id} service={service}></ServiceCard>)
               }
            </div>
        </div>

      </div>
    );
};

export default Services;