
const Content = ({content, loading}) => {
    if (loading ){
        return (
            <div className="loading-container">
                <div class="lds-dual-ring"></div>
            </div>
        
        )
    }
    return (
        <div className="contents-container">
            {
            content.map(con => {
                return (
                    <div key={con.name} className="content-container">
                        
                        <h1 className="country-name">{con.name}</h1>
                        <p className="country-region" >{con.region}</p>
                        <p className="country-area">{con.area}</p>

                    </div>
                )
            })
            } 
            


            {content.map(con => {
                return (
                    <div key={con.name} className="content-container">
                        
                        <h1 className="country-name">{con.name}</h1>
                        <p className="country-region" >{con.region}</p>
                        <p className="country-area">{con.area}</p>

                    </div>
                )
            })}

        </div>
    )
    
} 

export default Content;