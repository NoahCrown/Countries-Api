import Button from "./Button"
import { useCountries } from "../context/Context"


const Buttons = () => {

    const {handleSort, handleFilterByArea, handleFilterByRegion} = useCountries()
    

    return (
        <div className="button-container">

            <div className="filter">
                <Button method={handleFilterByArea} name={"Smaller than Luisiana"}/>
                <Button method={handleFilterByRegion} name={"In Oceania Region"} />
            </div>
            <div className="sort">
                <Button method={handleSort} name={"Sort"}/>

            </div>
            

        </div>

    )
}

export default Buttons