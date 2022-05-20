import { Fragment } from "react";

const PaginationBar = (props) => {
    const currentPage = props.currentPage;
    const prevClass = currentPage !== 1 ? "page-item" : "page-item disabled"
    const nextClass = props.orders.length > currentPage * props.currentSize ? "page-item" : "page-item disabled"
    return <Fragment>
        <nav aria-label="...">
            <ul className="pagination d-flex justify-content-center">
                <li className={prevClass}>
                    <a className="page-link" href="#" tabIndex="-1" onClick={() => props.handler("PREV")}>Previous</a>
                </li>
                {currentPage !== 1 && (
                    <li className="page-item"><a className="page-link" href="#" onClick={() => props.handler(currentPage - 1)}>{currentPage - 1}</a></li>)
                }
                <li className="page-item active">
                    <a className="page-link" href="#">{currentPage}<span className="sr-only">(current)</span></a>
                </li>
                {
                    props.orders.length > currentPage * props.currentSize && 
                    (<li className="page-item"><a className="page-link" href="#" onClick={() => props.handler(currentPage + 1)}>{currentPage + 1}</a></li>)
                }

                <li className={nextClass}>
                    <a className="page-link" href="#" onClick={() => props.handler("NEXT")}>Next</a>
                </li>
            </ul>
        </nav>
    </Fragment>;
}
export default PaginationBar;