import React from "react"
import Layout from "../components/layout"
import SearchBar from "../components/SearchBar"
import Products from "../components/Products"
import "bootstrap/dist/css/bootstrap.min.css"
import Report from "../../public/report.inline.svg"

const Index = () => {
  return (
    <Layout>
      <div className="home-page">
        <div className="search-section">
          <div>
            <h3>Looking For Something?</h3>
            <SearchBar />
          </div>

          <Report style={{ width: `300px`, height: "300px" }} />
        </div>
        <div className="products">
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
        </div>
      </div>
    </Layout>
  )
}

export default Index
