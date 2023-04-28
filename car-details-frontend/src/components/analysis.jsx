import { useState, useEffect, useRef } from 'react';
import '../css/analysis.css'
import '../css/home.css'
import axios from 'axios';
import {Table} from "antd";
export default function Analysis() {
    const columnTemplate= [
        {
            title: "Id",
            dataIndex: "id"
        },
        {
            title: "First_Name",
            dataIndex: "first_name"
        },
        {
            title: "Last_Name",
            dataIndex: "last_name"
        },
        {
            title: "Email",
            dataIndex: "email"
        },
        {
            title: "Gender",
            dataIndex: "gender"
        },
        {
            title: "Income",
            dataIndex: "income"
        },
        {
            title: "City",
            dataIndex: "city"
        },
        {
            title: "Car",
            dataIndex: "car"
        },
        {
            title: "Quote",
            dataIndex: "quote"
        },
        {
            title: "Phone_Price",
            dataIndex: "phone_price"
        }

    ];

    const [columns, setColumns] = useState([]);
    const [dataSource,setDataSource] = useState([]);

    useEffect(() => {
        const select = document.getElementById("option");

        const handleChange = function() {
            const selected = select.value;

            // try{
            //     console.log(selected)
            //     axios.post("http://localhost:5000/details/post", {
            //         selected
            //     })     
            // } catch (error){
            //     console.log(error);
            // }

            switch(selected){
                case "1":
                    axios.get("http://localhost:5000/details/query1")
                        .then(response => {
                            console.log(JSON.parse(JSON.stringify(response.data)))  
                            setColumns(columnTemplate) 
                            setDataSource(JSON.parse(JSON.stringify(response.data)))
                        })
                        .catch(err => console.log(err))
                    break;

                case "2":
                    axios.get("http://localhost:5000/details/query2")
                        .then(response => {
                            console.log(JSON.parse(JSON.stringify(response.data)))
                            setColumns(columnTemplate)   
                            setDataSource(JSON.parse(JSON.stringify(response.data)))
                        })
                        .catch(err => console.log(err))
                        break;
                
                case "3":
                    axios.get("http://localhost:5000/details/query3")
                        .then(response => {
                            console.log(JSON.parse(JSON.stringify(response.data)))
                            setColumns(columnTemplate)   
                            setDataSource(JSON.parse(JSON.stringify(response.data)))
                        })
                        .catch(err => console.log(err))
                    break;

                case "4":
                    axios.get("http://localhost:5000/details/query4")
                        .then(response => {
                            console.log(JSON.parse(JSON.stringify(response.data))) 
                            setColumns(columnTemplate)  
                            setDataSource(JSON.parse(JSON.stringify(response.data)))
                        })
                        .catch(err => console.log(err))
                    break;

                case "5":
                    axios.get("http://localhost:5000/details/query5")
                        .then(response => {
                            console.log(JSON.parse(JSON.stringify(response.data))) 
                            setColumns([
                                {
                                    title: "City",
                                    dataIndex: "_id"
                                },
                                {
                                    title: "Count",
                                    dataIndex: "count"
                                },
                                {
                                    title: "AverageIncome",
                                    dataIndex: "avgIncome"
                                }
                            ])  
                            setDataSource(JSON.parse(JSON.stringify(response.data)))
                        })
                        .catch(err => console.log(err))
                    break;      
                
            }

        }
        select.addEventListener("change", handleChange);
        return () => {
            select.removeEventListener("change", handleChange);
        }
    }, []);

    

    // function postName(selectedOption){
    //     console.log("deepan")
    //     try{
    //         console.log(selectedOption)
    //         axios.post("http://localhost:5000/details/post", {
    //             selectedOption
    //         })
            
    //     } catch (error){
    //         console.log(error);
    //     }

    // }
    
    

    return (
        <div className="query-container">
            <h1 className="welcome select-title">Select <span className="red">the Query</span></h1>
            <select className="drop-menu" id='option'>
                <option value=" ">Select Option</option>
                <option value="1">Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.</option>
                <option value="2">Male Users which have phone price greater than 10,000.</option>
                <option value="3">Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.</option>
                <option value="4">Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.</option>
                <option value="5">Show the data of top 10 cities which have the highest number of users and their average income.</option>
            </select>

            <Table columns={columns} dataSource={dataSource} scroll={{y:280}}/>
            
        </div>
        
    );
}
