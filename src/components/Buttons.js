import Button from "./Button"


const Buttons = ({sortData, filterByArea, filterByRegion}) => {
    

    return (
        <div className="button-container">

            <div className="filter">
                <Button method={filterByArea} name={"Smaller than Luisiana"}/>
                <Button method={filterByRegion} name={"In Oceania Region"} />
            </div>
            <div className="sort">
                <Button method={sortData} name={"Sort"}/>

            </div>
            

        </div>

    )
}

export default Buttons