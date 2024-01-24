import React, { useState } from 'react'
import "./list.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import SearchItem from '../../components/searchItem/SearchItem'
import Footer from '../../components/footer/Footer'
import MailList from '../../components/mailList/MailList'
import useFetch from "../../hooks/useFetch"
import reFetch from "../../hooks/useFetch"

const List = ()=>{

    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination)
    const [date,setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)
    const [openDate, setOpenDate] = useState(false)
    const [min, setMin] = useState(undefined)
    const [max, setMax] = useState(undefined)


    const {data, loading, error, refetch} = useFetch(`hotels?city=${destination}&min=${min || 0}&max=${max || 10000}`)

    const handleClick = ()=>{
        reFetch()
    }

    return (
        <div>
            <Navbar/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="listTitle">Search</h1>
                        <div className="lItem">
                            <label htmlFor="" className="">Destination</label>
                            <input type="text" placeholder={destination}/>
                        </div>
                        <div className="lItem">
                            <label htmlFor="" className="">Check-in Date</label>
                            <span onClick={()=>setOpenDate(!openDate)} className="searchDate">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                            {openDate && <DateRange onChange={item=>setDate([item.selection])} minDate={new Date()} ranges={date}/>}
                        </div>
                        <div className="lItems">
                            <label htmlFor="" className="optns">Options</label>
                            <div className="lOptions">
                                <div className="optionItem">
                                    <span className="optionText" >Min price</span>
                                    <input type="number" onChange={e=>setMin(e.target.value)} className="opsearch" min={0} />
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Max price</span>
                                    <input type="number" onChange={e=>setMax(e.target.value)} className="opsearch" min={1} />
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Adults</span>
                                    <input type="number" className="opsearch" min={1} placeholder={options.adult} />
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <input type="number" className="opsearch" min={1} placeholder={options.children} color='darkslategrey' />
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Room</span>
                                    <input type="number" className="opsearch" min={1} placeholder={options.room}/>
                                </div>
                            </div>
                        </div>
                        <button onClick={handleClick}>Search</button>
                    </div>
                    <div className="listResult">
                        {loading ? "loading" : <>
                            {data.map(item=>(
                                <SearchItem item={item} key={item._id}/>
                            ))}
                            
                        </>}
                    </div>
                    
                </div>
            </div>
            <MailList/>
            <Footer/>
        </div>
    )
}

export default List