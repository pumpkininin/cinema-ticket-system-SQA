import { useEffect, useState, useContext } from "react";

import ComboItem from '../combo-item/ComboItem'
import AuthContext from '../../../store/auth-context'

const ComboList = (props) => {
    const [comboList, setComboList] = useState([]);
    const authCtx = useContext(AuthContext);
    useEffect(() => {
        let url = `http://127.0.0.1:8080/api/staff/combo`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + authCtx.token,
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
        }).then((data) => {
            setComboList(data)
        })

    }, [])
    return (
        <div className="combo-list my-3">
            <h2>SUPER COMBO:</h2>
            <div className="list-items d-flex flex-row row justify-content-between">
                {comboList.map(combo => <ComboItem key ={combo.comboId} combo={combo} />)}
            </div>
        </div>
    );
} 
export default ComboList;