import React, { useEffect, useState } from 'react'
import './menu.css'
import SelectionBar from '../Compnents/SelectionBar'
import frame1 from '../images/Frame.png'
import frame2 from '../images/Frame2.png'
import cocktail1 from '../images/image.png'
import cocktail2 from '../images/cocktail1.png'
import { getAllBrunchesApi, getAllDrinksApi, getAllFoodsApi } from '../sevices/AllApi'

const Menu = () => {
    const[foods,setFoods]=useState([])
    const[drinks,setDrinks]=useState([])
    const[brunches,setBrunches]=useState([])
    const[heading,setHeading]=useState("")

    useEffect(()=>{
        getAllFoods()
    },[])

    const getAllFoods=async()=>{
        try{
            const resultFood=await getAllFoodsApi();
            if(resultFood.status==200){
                setFoods(resultFood.data);
                setHeading("Savory Bites")
                setDrinks([]);
                setBrunches([]);
            } else {
                alert(resultFood.response?.data || "Failed to fetch foods.");
              }
        }catch(err){
            console.log(err);
            
        }
    }

    const getAllDrinks=async()=>{
        try{
            const resultDrinks=await getAllDrinksApi();
            if(resultDrinks.status==200){
                setDrinks(resultDrinks.data)
                setHeading("Brunch Cocktails")
                setBrunches([])
                setFoods([])
            } else {
                alert(resultDrinks.response?.data || "Failed to fetch drinks.");
              }
        }catch(err){
            console.log(err);
            
        }
    }

    const getAllBrunches=async()=>{
        try{
            const resultBrunches=await getAllBrunchesApi();
            if(resultBrunches.status==200){
                setBrunches(resultBrunches.data)
                setHeading("Brunch Favorites")
                setDrinks([])
                setFoods([])
            } else {
                alert(resultBrunches.response?.data || "Failed to fetch brunches.");
              }
        }catch(err){
            console.log(err);
            
        }
    }
  return (
    <>
        <div id='mainmenubg' >
            <h1 className='d-flex justify-content-center'><p className='menuh1'>MENU</p></h1>
            <p className='text-center para1'>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to <br /> place an order, use the "Order Online" button located below the menu.</p>  
        </div>
        <SelectionBar getAllFoods={getAllFoods}
                getAllDrinks={getAllDrinks}
                getAllBrunches={getAllBrunches}/>
        <div id='menuList' className='row w-100'>
            <div className="col-lg-1 frame">
                <img src={frame2} alt="" />
            </div>
            <div className="col-lg-10 text-light p-5">
                
                <div className=" border border-light p-5">
                <img className='cocktail' style={{marginTop:"-160px",marginLeft:"-100px"}} width={"150px"} src={cocktail1} alt="" />
                <h1 className='text-center menuhead ' style={{marginTop:"-50px"}}>
                    {heading}
                </h1>
                <div className="row mt-5">
                    {
                        foods.length>0&&
                        foods?.map(food=>(
                            <div className="col-lg-6 mt-3">
                        <div className="d-flex justify-content-between container fw-bold" style={{fontFamily: 'Oswald, sans-serif'}}>
                            <h5 className='foodname'>
                            {food.name}
                            </h5>
                            <h5 className='foodname'>
                                {food.price}
                            </h5>
                        </div>
                        <p className='container fooddesc'>{food.description}</p>
                    </div>
                        ))
                    }

{
                        drinks.length>0&&
                        drinks?.map(drink=>(
                            <div className="col-lg-6 mt-3">
                        <div className="d-flex justify-content-between container fw-bold" style={{fontFamily: 'Oswald, sans-serif'}}>
                            <h5 className='foodname'>
                            {drink.name}
                            </h5>
                            <h5 className='foodname'>
                                {drink.price}
                            </h5>
                        </div>
                        <p className='container fooddesc'>{drink.description}</p>
                    </div>
                        ))
                    }
                    {
                        brunches.length>0&&
                        brunches?.map(brunch=>(
                            <div className="col-lg-6 mt-3">
                        <div className="d-flex justify-content-between container fw-bold" style={{fontFamily: 'Oswald, sans-serif'}}>
                            <h5 className='foodname'>
                            {brunch.name}
                            </h5>
                            <h5 className='foodname'>
                                {brunch.price}
                            </h5>
                        </div>
                        <p className='container fooddesc'>{brunch.description}</p>
                    </div>
                        ))
                    }
                    
                </div>
                <p className='d-flex justify-content-end'>< img width={"150px"} style={{marginBottom:"-100px",marginRight:"-30px"}} src={cocktail2} alt="" /></p>
                </div>
            </div>
            <div className="col-lg-1 frame">
            <img src={frame1} alt="" />
            </div>
        </div>
    </>
  )
}

export default Menu