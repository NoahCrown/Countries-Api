import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CountriesContext = createContext()

export const useCountries = () => {
    return useContext(CountriesContext)
}

export const CountriesProvider = ({children}) => {
    const [content, setContent] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [contentPerPage, ] = useState(10)
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterByArea, setFilterByArea] = useState(false);
  const [filterByRegion, setFilterByRegion] = useState(false)

  // Getting the data from the api 
  useEffect(() => {
    const getContents = async () => {
      setLoading(true)
      const response = await axios.get("https://restcountries.com/v2/all?fields=name,region,area")
      .catch(e => console.log(e))
      setContent(response.data)
      setLoading(false)
    }
    getContents()
  }, [])




  // Sorting Logic 
  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  };

  const sortedCountries = [...content].sort((a, b) =>
  sortOrder === "asc"
    ? a.name.localeCompare(b.name)
    : b.name.localeCompare(a.name)
);


  // Filtering Logic 
  let filteredCountries = sortedCountries.filter((country) => {
    if (filterByArea && filterByRegion){
      return country.area < 135651 && country.region === "Oceania"
    }else if (filterByArea){
      return country.area < 135651
    }else if (filterByRegion){
      return country.region === "Oceania"
    }else{
      return country
    }
  })

  const handleFilterByArea = () => {
    setFilterByArea(!filterByArea);
  };

  const handleFilterByRegion = () => {
    setFilterByRegion(!filterByRegion)
  }
    
  
  // Pagination Logic 
  const indexLastPost = currentPage * contentPerPage
  const indexFirstPost = indexLastPost - contentPerPage
  const contentToShow = filteredCountries.slice(indexFirstPost, indexLastPost)

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const contextValues = {
    content,
    loading,
    currentPage,
    contentPerPage,
    sortOrder,
    filterByArea,
    filterByRegion,
    handleSort,handleFilterByArea, handleFilterByRegion,
    contentToShow,
    changePage,
    filteredCountries
}
    return(
        <CountriesContext.Provider value={contextValues}>
            {children}
        </CountriesContext.Provider>
    )

}


