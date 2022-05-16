const Category = (props) => {
    return (
        <div className="category-list mt-5 d-flex justify-content-around row">
        <div className="category mt-3 col-12 col-sm-6 col-md-4" style={{color: "white"}}>
            <a>ON AIR</a>
        </div>
        <div className="category mt-3 col-12 col-sm-6 col-md-4" style={{color: "white"}}>
            <a>UP COMING</a>
        </div>
        <div className="category mt-3 col-12 col-sm-6 col-md-4" style={{color:" white"}}>
            <a>FAVORITE</a>
        </div>
    </div>
    ) ;
} 
export default Category;