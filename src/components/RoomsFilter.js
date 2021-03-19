import React from 'react';
import {useContext} from "react";
import {RoomContext} from "../context";
import Title from "./Title";

const getUnique = (items, value) =>{
    return[...new Set(items.map(item => item[value]))];
};
const RoomsFilter=({rooms})=> {
   const context = useContext(RoomContext);
const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    threeMonths,
    sixMonth
} = context;
let types = getUnique(rooms, "type");
types = ["all", ...types];
types = types.map((item, index)=>{
return (
    <option value={item} key={index}>{item}</option>
);
});
let people = getUnique(rooms, "capacity");
people = people.map((item,index)=>{
    return <option key={index} value={item}>{item}</option>

})
return (
     <section className="filter-container">
     <Title title="Search For Temporary Housing "/>
     <form className="filter-form">
     {/*select type*/}
<div className="form-group" >
<label htmlFor="type">  Housing Options</label>
<select 
name="type" 
id="type" 
value={type}
className="form-control" 
onChange={handleChange}>
{types}
</select> 

</div>

<div className="form-group" >
<label htmlFor="capacity"> Members </label>
<select 
name="capacity" 
id="capacity" 
value={capacity}
className="form-control" 
onChange={handleChange}>
{people}
</select> 

</div>

   <div className="form-group">
   <label htmlFor="price">
   Price Range ${price}
   </label>
   <input type="range" name="price" min={minPrice}
   max={maxPrice} id="price" value={price} onChange= {handleChange}
   className="form-control"/>
   </div>
   
<div className="form-group">
<label htmlFor="size"> Room size </label>
<div className="size-inputs">
<input type="number" name="minSize" id="size"
vaule={minSize} onChange={handleChange}
className="size-input"/>
<input type="number" name="maxSize" id="size"
vaule={maxSize} onChange={handleChange}
className="size-input"/>
</div>
</div>
{/* */}
{/* */}
<div className="form-group">
<div className="single-extra">
<input 
type="checkbox" 
name="threeMonths"
id="sixMonth"
checked={threeMonths}
onChange={handleChange}
/>
<label htmlFor="threeMonths"> 3 Months</label>
</div>
<div className="single-extra">
<input 
type="checkbox" 
name="sixMonth"
id="sixMonth"
checked={sixMonth}
onChange={handleChange}
/>
<label htmlFor="sixMonth"> 6 Months</label>
</div>
</div>
     </form>
     </section> 
    );
}
export default RoomsFilter;
