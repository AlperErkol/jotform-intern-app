import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';


// Components
import Header from './Header';
import Home from './Home';

// Style
import './Dashboard.css';
function Dashboard() {


    const [firstData,setFirstData] = useState();
    const [firstMapData,setFirstMapData] = useState();
    const [date,setDate] = useState(0);
    const [isDateChanged,setIsDateChanged] = useState(false);
    const [theme,setTheme] = useState('default');


    useEffect(() => {


        async function fetchData(){

            const Papa = require('papaparse');
            const response = await fetch('tablestats.csv')
            const data = await response.text();
            const parsedData = Papa.parse(data,{
                header : true
            });

            const dataLength = parsedData.data.length;



            for (let index = 0; index < dataLength; index++) {
                if(parsedData.data[dataLength-1-index].date !== undefined && parsedData.data[dataLength-1-index].date !== ""){
                    setDate(parsedData.data[dataLength-1-index].date);
                    break;
                }
            }
            
            setFirstData(parsedData);

        }

        fetchData();
    }, [])
    
    useEffect(() => {


        async function getMapData(){

            const Papa = require('papaparse');
            const response = await fetch('user_locations.csv');
            const data = await response.text();

            const mapData = Papa.parse(data,{
                header:true
            });

            const parsedMapData = [];

            mapData.data.forEach(element => {
                const innerElement = [];
                if(element.value !== "" && element.code !== "" && element.code !== undefined){
                    
                    innerElement.push(element.code.toLowerCase());
                    innerElement.push(element.value);
                    parsedMapData.push(innerElement);
                }


                
            });
            
            setFirstMapData(parsedMapData);
            // mapOptions.series[0].data = parsedMapData;
            // setFirstMapData(mapOptions);
            
        }

        getMapData();

        
        
        
    }, [])

    
    const changeDate = (datePicker)=>{
        setDate(datePicker);
        setIsDateChanged(true);
    }

    const changeTheme = () =>{

        if(theme === 'default'){
            setTheme('dark');
        }
        else{
            setTheme('default');
        }
    }



    return (
        <Router>
            <div className="dashboard">
                { firstData && <Header changeTheme={changeTheme} date={date} changeDate={changeDate} data={firstData}/> }
            
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>

                <Route path="/home" exact>
                    { firstData && <Home isDateChanged={isDateChanged} dateChanged={date} data={firstData} mapData={firstMapData} theme={theme}/> }
                </Route>

            </div>
        </Router>
    )
}

export default Dashboard;
