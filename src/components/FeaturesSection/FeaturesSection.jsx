import FeaturesCard from "./FeaturesCard";
import skyLineFeatures from "../../data/features";
import { Link } from "react-router";
import ModalFeature from "./ModalFeature";
import { useState } from "react";

const FeaturesSection = () => {
    const [isModalFeatureOpen, setIsModalFeatureOpen] = useState(false);
    const [selectedFeature, setSelectedFeature] = useState(null);

    return (
        <section>
            <h2>What we do at SkyLine</h2>
            
            <div className="grid grid-cols-3 gap-8 border">
                {
                    skyLineFeatures.map((feature) => {
                        return (
    
                            <FeaturesCard 
                                key={feature.id}
                                {...feature}
                                showModal={() => {
                                    setIsModalFeatureOpen(true);
                                    setSelectedFeature(feature)
                                }}
                            />

                
                        )
                    })
                }
            </div>
            <Link to={"/"} className="underline" >Return Home</Link>

            {
                isModalFeatureOpen &&
                <ModalFeature 
                    feature={selectedFeature}
                    onClose={() => setIsModalFeatureOpen(false)}
                />
            }
        </section>
    )
}

export default FeaturesSection;