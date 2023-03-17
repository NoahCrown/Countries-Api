
const Pagination = ({paginate, contentPerPage, totalContents }) => {
    let pageNumbers = []
    for(let i = 1; i <= Math.ceil(totalContents / contentPerPage); i++){
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
                    onClick={() => paginate(val)}
                    >
                        {val}
                    </a>
                ))}

            </ul>

        </nav>
    )
    
}
export default Pagination;