import { useCountries } from "../context/Context"


const Pagination = () => {
    const {contentPerPage, filteredCountries, changePage } = useCountries()

    let pageNumbers = []
    for(let i = 1; i <= Math.ceil(filteredCountries.length / contentPerPage); i++){
        pageNumbers.push(i)
    }
    
    return (
        <nav className="pagination-nav">
            <ul className="pagination">
                {pageNumbers.map(val => (
                    <a 
                    key={val} 
                    className="page-number" 
                    href="!#"
                    onClick={() => changePage(val)}
                    >
                        {val}
                    </a>
                ))}

            </ul>

        </nav>
    )
    
}
export default Pagination;