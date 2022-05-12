import ComboItem from "../combo-item/ComboItem";

const ComboList = (props) => {
    return (
        <div className="combo-list my-3">
            <h2>SUPER COMBO:</h2>
            <div className="list-items d-flex flex-row row justify-content-between">
                <ComboItem></ComboItem>
                <ComboItem></ComboItem>
                <ComboItem></ComboItem>
                <ComboItem></ComboItem>
            </div>
        </div>
    );
} 
export default ComboList;