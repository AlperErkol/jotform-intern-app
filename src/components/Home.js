import React,{useState,useEffect} from 'react';

// Highchart and HighMap
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import DarkBlue from 'highcharts/themes/dark-blue';
import map from "highcharts/modules/map";

// Style
import './Home.css';

// Icons
import { IoPeopleSharp } from "react-icons/io5";
import { BiDollar } from "react-icons/bi";
import { ImMobile} from "react-icons/im";
import { HiOutlineCursorClick } from "react-icons/hi";
import { MdArrowDropDown,MdArrowDropUp } from "react-icons/md";

// Data
import sign_ups from '../data/sign_ups';
import guests from '../data/guests';
import submits from '../data/submits';
import plans from '../data/plans';
import form_views_chart from '../data/form_views';
import thirty_days from '../data/30days';
import mapOptions from '../data/country';
import {users_chart,mobile_views_count_chart,daily_visits_chart,total_paid} from '../data/small_chart';




function Home({dateChanged,data,mapData,theme}) { 


    const [getDate,setDate] = useState(dateChanged);
    const [getTheme,setTheme] = useState(theme);

    // States
    const [parsedData,setParsedData] = useState(data);

    // Data States
    const [signUpsState,setSignUpsState] = useState();
    const [guestsState,setGuestsState] = useState();
    const [submitState,setSubmitState] = useState();
    const [mobileViewState,setMobileViewState] = useState();
    const [dailyVisitsState,setDailyVisitsState] = useState();
    const [formViewsState,setFormViewsState] = useState();
    const [thirtyDaysState,setThirtyDaysState] = useState();
    const [plansState,setPlansState] = useState();
    const [userState,setUserState] = useState();
    const [paidState,setPaidState] = useState();
    const [mapState,setMapState] = useState();
    const [userDifference,setUserDifference] = useState();
    const [formDifference,setFormDifference] = useState();
    const [enabledDifference,setEnabledDifference] = useState();
    const [submissionsDifference,setSubmissionDifference] = useState();
    const [paidDifference,setPaidDifference] = useState();
    const [chartUpdate,setChartUpdate] = useState(false);
    const [index,setIndex] = useState();
    
    

    // Initial Function
    map(Highcharts);


    if(getDate !== dateChanged){
        setDate(dateChanged);
    }


    const parseData = value =>{

            let currentDate = value;
            let dataLength = data.data.length;

            let findingIndex = 0;

            for (let index = 0; index < dataLength; index++) {
                
                if(parsedData.data[index].date === currentDate){
                    findingIndex = index;
                    setIndex(findingIndex);
                    
                    break;
                }

            }

            

            const total_users_today = parseInt(parsedData.data[findingIndex].users);
            const total_users_yesterday = parseInt(parsedData.data[findingIndex-1].users);
            const user_difference = total_users_today - total_users_yesterday;

            setUserDifference(user_difference);



            const total_users_array = [];
            for (let index = 0; index < 15; index++) {
                const element = {
                    submissionDate : parsedData.data[dataLength-3-index].date,
                    data : parsedData.data[dataLength-3-index].users
                }
                total_users_array.push(element);
                
            }

            // Forms
            const total_form_count_today = parseInt(parsedData.data[findingIndex].forms);
            const total_form_count_yesterday = parseInt(parsedData.data[findingIndex-1].forms);
            const form_difference = ((total_form_count_today-total_form_count_yesterday) / total_form_count_yesterday)*100;
            
            setFormDifference(parseFloat(form_difference.toFixed(2)));

            // Enabled Forms
            const enabled_form_count_today = parseInt(parsedData.data[findingIndex].forms_enabled);
            const enabled_form_count_yesterday = parseInt(parsedData.data[findingIndex-1].forms_enabled);
            const enabled_forms_difference = ((enabled_form_count_today-enabled_form_count_yesterday) / enabled_form_count_yesterday)*100;

            setEnabledDifference(parseFloat(enabled_forms_difference.toFixed(2)));

            // Submissions
            const submissions_today = parseInt(parsedData.data[findingIndex].submissions);
            const submissions_yesterday = parseInt(parsedData.data[findingIndex-1].submissions);
            const submissions_difference = ((submissions_today-submissions_yesterday) / submissions_yesterday)*100;

            setSubmissionDifference(parseFloat(submissions_difference.toFixed(2)));

            
            // Sign Ups
            const total_signups = parseInt(parsedData.data[findingIndex].signups);
            const sigunps_username = parseInt(parsedData.data[findingIndex].signupswithusername);
            const signups_nousername = total_signups - sigunps_username;
            
            const percUsername = (sigunps_username / total_signups) * 100;
            const percNoUsername = (signups_nousername / total_signups) * 100;

            sign_ups.series[0].data[0].y = percUsername;
            sign_ups.series[0].data[1].y = percNoUsername;

            
            // Guests
            const guest_mail = parseInt(parsedData.data[findingIndex].guests_email);
            const guest_nomail = parseInt(parsedData.data[findingIndex].guests_noemail);

            guests.series[0].data[0] = guest_mail;
            guests.series[1].data[0] = guest_nomail;

            
            
            // Submits

            const submit1 = parseInt(parsedData.data[findingIndex].submit1);
            const submit5 = parseInt(parsedData.data[findingIndex].submit5);
            const submit10 = parseInt(parsedData.data[findingIndex].submit10);
            const submit100 = parseInt(parsedData.data[findingIndex].submit100);
            const submit1000 = parseInt(parsedData.data[findingIndex].submit1000);


            submits.series[0].data[0].y = submit1;
            submits.series[0].data[1].y = submit5;
            submits.series[0].data[2].y = submit10;
            submits.series[0].data[3].y = submit100;
            submits.series[0].data[4].y = submit1000;



            // Plans

            const bronze_now = parseInt(parsedData.data[findingIndex].bronze);
            const silver_now = parseInt(parsedData.data[findingIndex].silver);
            const gold_now = parseInt(parsedData.data[findingIndex].gold);

            const bronze_month = parseInt(parsedData.data[findingIndex-30].bronze);
            const silver_month = parseInt(parsedData.data[findingIndex-30].silver);
            const gold_month = parseInt(parsedData.data[findingIndex-30].gold);

            const bronze_twoMonth = parseInt(parsedData.data[findingIndex-60].bronze);
            const silver_twoMonth = parseInt(parsedData.data[findingIndex-60].silver);
            const gold_twoMonth = parseInt(parsedData.data[findingIndex-60].gold);

            const bronze = [bronze_twoMonth,bronze_month,bronze_now];
            const silver = [silver_twoMonth,silver_month,silver_now];
            const gold = [gold_twoMonth,gold_month,gold_now];


            plans.series[0].data = bronze;
            plans.series[1].data = silver;
            plans.series[2].data = gold;





            

            // Form Views
            const form_views = parseInt(parsedData.data[findingIndex].form_views);
            const form_views_direct = parseInt(parsedData.data[findingIndex].form_views_direct);
            const form_views_embed = parseInt(parsedData.data[findingIndex].form_views_embed);
            const form_views_mobile = form_views - (form_views_direct + form_views_embed); 
            
            const form_views_direct_perc = (form_views_direct/form_views)*100;
            const form_views_embed_perc = (form_views_embed/form_views)*100;
            const form_views_mobile_perc = (form_views_mobile/form_views)*100;

            form_views_chart.series[0].data[0].x = form_views_direct;
            form_views_chart.series[0].data[0].y = form_views_direct_perc;

            form_views_chart.series[0].data[1].x = form_views_embed;
            form_views_chart.series[0].data[1].y = form_views_embed_perc;
            
            form_views_chart.series[0].data[2].x = form_views_mobile;
            form_views_chart.series[0].data[2].y = form_views_mobile_perc;
            
            // Some Info

            const free_users_created_form_30days = parseInt(parsedData.data[findingIndex].free_users_created_form_30days);
            const free_users_edited_form_30days = parseInt(parsedData.data[findingIndex].free_users_edited_form_30days);
            const free_users_received_sub_30days = parseInt(parsedData.data[findingIndex].free_users_received_sub_30days);
            
            const paid_users_created_form_30days = parseInt(parsedData.data[findingIndex].paid_users_created_form_30days);
            const paid_users_edited_form_30days = parseInt(parsedData.data[findingIndex].paid_users_edited_form_30days);
            const paid_users_received_sub_30days = parseInt(parsedData.data[findingIndex].paid_users_received_sub_30days);
            
            const users_created_form_30days = parseInt(parsedData.data[findingIndex].users_created_form_30days);
            const users_edited_form_30days = parseInt(parsedData.data[findingIndex].users_edited_form_30days);
            const users_received_sub_30days = parseInt(parsedData.data[findingIndex].users_received_sub_30days);

            const received_sub = [free_users_received_sub_30days,paid_users_received_sub_30days,users_received_sub_30days];
            const created_form = [free_users_created_form_30days,paid_users_created_form_30days,users_created_form_30days];
            const edited_form = [free_users_edited_form_30days,paid_users_edited_form_30days,users_edited_form_30days];

            
            thirty_days.series[0].data = received_sub;
            thirty_days.series[1].data = created_form;
            thirty_days.series[2].data = edited_form;



            


            // Small Charts

            const mobile_view_last_10days = [];
            const daily_visits_last_10days = [];
            const user_count_last_15days = [];
            
            let total = 0;

            for (let index = 0; index < 10; index++) {
                const element = {
                    name : parsedData.data[dataLength-2-index].date,
                    data : [parseInt(parsedData.data[dataLength-2-index].mobile_view_count)]
                }

                total += parseInt(parsedData.data[dataLength-2-index].mobile_view_count);

                mobile_view_last_10days.push(element);
                
            }

            


            for (let index = 0; index < 10; index++) {
                const element = {
                    name : parsedData.data[dataLength-2-index].date,
                    data : [parseInt(parsedData.data[dataLength-2-index].daily_visits)]
                }

                daily_visits_last_10days.push(element);
                
            }

            for (let index = 0; index < 15; index++) {
                const element = {
                    name : parsedData.data[dataLength-2-index].date,
                    data : [parseInt(parsedData.data[dataLength-2-index].users)]
                }

                user_count_last_15days.push(element);

            }

            const totalPaidData = [];
            const totalPaidDate = [];

            for (let index = 0; index < 8; index++) {
                const date = parsedData.data[dataLength-2-index].date;
                const data = parseInt(parsedData.data[dataLength-2-index].totalpaid);

                totalPaidData.push(data);
                totalPaidDate.push(date);


            }

            const total_paid_now = parseInt(parsedData.data[findingIndex].totalpaid);
            const total_paid_yesterday = parseInt(parsedData.data[findingIndex-1].totalpaid);


            setPaidDifference(total_paid_now-total_paid_yesterday);

        
            total_paid.series[0].data = totalPaidData;
            total_paid.series[0].date = totalPaidDate;             

            
            

            mobile_views_count_chart.series = mobile_view_last_10days;
            daily_visits_chart.series = daily_visits_last_10days;
            users_chart.series = user_count_last_15days;



            // There is no data by date for map in user_locations.csv file...
            mapOptions.series[0].data = mapData;
            setMapState(mapOptions);
            setSignUpsState(sign_ups);
            setGuestsState(guests);
            setSubmitState(submits);
            setMobileViewState(mobile_views_count_chart);
            setDailyVisitsState(daily_visits_chart);
            setFormViewsState(form_views_chart);
            setThirtyDaysState(thirty_days);
            setPlansState(plans);
            setUserState(users_chart);
            setPaidState(total_paid);
            setChartUpdate(true);

    }

    if(getTheme !== theme){

        setTheme(theme);
    }

    useEffect(() => {

        parseData(getDate);
                
    })



    // Formatter Function
    const formatter = value =>{

        let suffix = "";
            let newValue = 0;
            if(value >= 1000000){
    
                suffix = "M";
                newValue = (value / 1000000).toFixed(2);
                
            }
            else if(value >= 1000){
                suffix = "K";
                newValue = (value / 1000).toFixed(2);
                
    
            }
            
            return newValue+suffix;

    }




    return (
        <section className="section-home">

            <div className="row-layered">
                <div className="left">
                    <div className="left-inner">
                        <div className="card sm user__count">
                            <div className="card__header">
                                <div className="card__header_head">
                                    <IoPeopleSharp/>
                                    <h4>User Count</h4>
                                    
                                </div>
                                
                                <span className="percentage">
                                    <p>{userDifference}</p>
                                    {
                                        (userDifference > 0) ? <span className="up_arrow"><MdArrowDropUp/></span> : <span className="down_arrow"><MdArrowDropDown/></span>
                                    }
                                </span>
                                
                            </div>
                            <div className="count-tag">
                                <h3 className="count">{index && parsedData && formatter(parsedData.data[index].users)}</h3>
                                <p className="count-avg-user">
                                    { userState && formatter(userState.series.reduce((total,element)=> {
                                        return total+element.data[0]
                                    },0) / userState.series.length)} average
                                </p>
                            </div>
                            <div className="last_ten_days">
                                <HighchartsReact
                                    allowChartUpdate={chartUpdate}
                                    highcharts={Highcharts}
                                    options={userState}
                                />
                            </div>
                        </div>
                        <div className="card sm forms">
                            <div className="card__header">
                                <div className="card__header_head">
                                    <IoPeopleSharp/>
                                    <h4>Form Count</h4>
                                    
                                </div>
                                <span className="percentage">
                                    <p>+{formDifference}%</p>
                                    <span><MdArrowDropUp/></span>
                                </span>
                            </div>
                            <h3 className="count_small">{index && parsedData && formatter(parsedData.data[index].forms)}</h3>
                            <div className="card__header">
                                <div className="card__header_head">
                                    <IoPeopleSharp/>
                                    <h4>Forms Enabled</h4>
                                    
                                </div>
                                <span className="percentage">
                                    <p>+{enabledDifference}%</p>
                                    <span><MdArrowDropUp/></span>
                                </span>
                            </div>
                            <h3 className="count_small">{index && parsedData && formatter(parsedData.data[index].forms_enabled)}</h3>
                            
                            
                        </div>
                        <div className="card sm submissions">
                            <div className="card__header">
                                <div className="card__header_head">
                                    <IoPeopleSharp/>
                                    <h4>Submission Count</h4>
                                    
                                </div>
                                <span className="percentage">
                                    
                                        <p>+{submissionsDifference}%</p>
                                        <span><MdArrowDropUp/></span>
                                    
                                </span>
                            </div>
                            <div className="card__body">
                                <h3 className="count">{index && parsedData && formatter(parsedData.data[index].submissions)}</h3>
                            </div>
                            
                            
                        </div>
                    </div>
                    <div className="left-inner">
                        <div className="card sm dynamic_bg">
                        <HighchartsReact
                            updateArgs={[true,true]}
                            highcharts={Highcharts}
                            options={guestsState}
                        />
                        </div>
                        <div className="card sm total_paid dynamic_bg">
                            <div className="card__header">
                                <div className="card__header_head">
                                    <BiDollar/>
                                    <h4>Total Paid</h4>
                                    
                                </div>
                                <span className="percentage">
                                    <p>{paidDifference}$</p>
                                    {
                                        (paidDifference > 0) ? <span className="up_arrow"><MdArrowDropUp/></span> : <span className="down_arrow"><MdArrowDropDown/></span>
                                    }
                                </span>
                            </div>
                            <div className="count-tag">
                                <h3 className="count">{index && parsedData && formatter(parsedData.data[index].totalpaid)}</h3>
                                <p className="count-avg">
                                    {
                                        paidState && formatter(paidState.series[0].data.reduce((total,element)=>{

                                            return total+element
                            
                                        },0) / paidState.series[0].data.length)
                            
                                        
                                    } average
                                
                                </p>
                            </div>
                            <div className="last_ten_days">
                                <HighchartsReact
                                    updateArgs={[true,true]}
                                    highcharts={Highcharts}
                                    options={paidState}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="card lg">
                    <HighchartsReact
                        updateArgs={[true,true]}
                        highcharts={Highcharts}
                        options={signUpsState}
                    />
                    </div>                    
                </div>
            </div>

            <div className="row">
                <div className="card lg">
                        <HighchartsReact
                            updateArgs={[true,true]}
                            highcharts={Highcharts}
                            options={submitState}
                        />
                </div>
                <div className="card lg">
                        <HighchartsReact
                            updateArgs={[true,true]}
                            highcharts={Highcharts}
                            options={plansState}
                        />
                </div>
            </div>

            <div className="row">
                <div className="card lg">
                        <HighchartsReact
                            updateArgs={[true,true]}
                            
                            highcharts={Highcharts}
                            options={formViewsState}
                        />
                </div>
                <div className="card lg">
                        <HighchartsReact
                            updateArgs={[true,true]}
                            
                            highcharts={Highcharts}
                            options={thirtyDaysState}
                        />
                </div>
            </div>

            <div className="row-layered">
                
                <div className="card country">
                        <HighchartsReact
                            updateArgs={[true,true]}
                            highcharts={Highcharts}
                            constructorType={"mapChart"}
                            options={mapState}
                        />
                
                </div>

                <div className="row-layered-inner">
                    <div className="card vert daily_visit">
                        <div className="vert_header">
                            <div className="vert_header_icon">
                                <span className="vert__icon">
                                    <ImMobile />
                                </span>
                            </div>
                        </div>
                        <div className="vert_body">
                            <h3 className="vert_info_count">{index && parsedData && formatter(parsedData.data[index].mobile_view_count)}</h3>
                            <p className="vert_info_name">Mobile Views</p>
                            <p className="vert_average">
                                {
                                    mobileViewState && formatter(mobileViewState.series.reduce((total,element)=>{

                                        return total+element.data[0]
                        
                                    },0) / mobileViewState.series.length)
                                } average
                                </p>
                        </div>
                        <div className="vert_footer">
                                <HighchartsReact
                                    updateArgs={[true,true]}
                                    highcharts={Highcharts}
                                    options={mobileViewState}
                                />
                        </div>
                    </div>
                    <div className="card vert mobile_views">
                        <div className="vert_header">
                            <div className="vert_header_icon">
                                <span className="vert__icon">
                                    <HiOutlineCursorClick />
                                </span>
                            </div>
                        </div>
                        <div className="vert_body">
                            <h3 className="vert_info_count">{index && parsedData && formatter(parsedData.data[index].daily_visits)}</h3>
                            <p className="vert_info_name">Daily Visits</p>
                            <p className="vert_average">
                                {
                                    dailyVisitsState && formatter(dailyVisitsState.series.reduce((total,element)=>{

                                        return total+element.data[0]
                        
                                    },0) / dailyVisitsState.series.length)
                                } average
                            </p>
                        </div>
                        <div className="vert_footer">
                                <HighchartsReact
                                    updateArgs={[true,true]}
                                    highcharts={Highcharts}
                                    options={dailyVisitsState}
                                />
                        </div>
                    </div>
                    
                </div>
                
            </div>



        </section>
    )
}

export default Home
