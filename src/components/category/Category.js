const Category = (props) => {
    return (
        <div className="category-list mt-5 d-flex justify-content-around">
        <div className="category mt-3" style={{color: "white"}}>
            <a>ON AIR</a>
        </div>
        <div className="category mt-3" style={{color: "white"}}>
            <a>UP COMING</a>
        </div>
        <div className="category mt-3" style={{color:" white"}}>
            <a>FAVORITE</a>
        </div>
    </div>
    ) ;
} 
export default Category;