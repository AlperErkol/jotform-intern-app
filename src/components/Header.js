import React,{useState,useEffect} from 'react'
import { BsMoon } from "react-icons/bs";
// Style
import './Header.css';

function Header({date,changeDate,changeTheme,data}) {


    
    

    const [pickedDate,setPickedDate] = useState(date);

    const toggleTheme= () =>{
        const body = document.body; 
        body.classList.toggle('dark');
        changeTheme();
    }

    const greetings = ()=>{

        const getDate = document.querySelector('.date-picker');
        setPickedDate(getDate.value);
        changeDate(getDate.value);
    }

    const intToMonth = val=>{

        let months = [ "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December" ];

        const number = parseInt(val);

        return months[number-1];

    }

    useEffect(() => {

        const dataLength = data.data.length;

        for (let index = dataLength-1; index >= dataLength; index--) {
                
            console.log(index);

        }

        


    }, [])
    

    return (
        <header className="header">
            <div className="current-date-area">
                {
                    pickedDate && 
                    <>
                        <span>{pickedDate.split('-')[2]}</span>
                        <div className="my-section">
                            <span>{intToMonth(pickedDate.split('-')[1])}</span>
                            <span>{pickedDate.split('-')[0]}</span>
                        </div>
                    </>
                }
            </div>


            <div className="date-pick-area">
                <input className="date-picker" type="date" min={data.data[0].date} />
                <button onClick={()=>greetings()} className="get-data">Get Data</button>
                
            </div>

            <div className="settings-area">
                <BsMoon onClick={()=>toggleTheme()}/>
            </div>

        </header>
    )
}

export default Header
