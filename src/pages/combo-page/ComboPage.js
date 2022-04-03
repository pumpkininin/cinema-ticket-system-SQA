import ComboList from "../../components/combo-list/ComboList";

const ComboPage = (props) => {
    return (
        <div className="choice-list" style={{color: "white"}}>
            <ComboList></ComboList>
            <ComboList></ComboList>
            <ComboList></ComboList>
        </div>
    );
} 
export default ComboPage;