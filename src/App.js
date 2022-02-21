import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Carosel from './Components/Carosel';
import Sponsers from './Components/Sponsers';
import { useState } from 'react';
import './App.css';
import Products from './Components/Products';
import Banner from './Components/Banner';
import Fasion from './Components/Fasion';
import Popup from './Components/Popup';
import Cart from './Components/Cart';
import Viewele from './Components/Viewele';
import Viewfas from './Components/Viewfas';
import Card from './Components/Card';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Menu from './Components/Menu';


function App() {
  
  const [close , setClose]=useState(false)
  const[product, setProduct]=useState(false)


    const [electronicsData, setElectronicsData]=useState([
      { 
       
        id: 1,
        pic: './img/electronics/m30.png',
        name: 'SAMSUNG Galaxy M30',
        price: 13999 ,
        category:'Electronics'
      },
      { 
        id: 2,
        pic: './img/electronics/vivobooks15.jpg',
        name: 'ASUS Vivobook S15',
        price: 65895 ,
        category:'Electronics'
      },
      { 
        id: 3,
        pic: './img/electronics/ideapad.jpg',
        name: 'Lenovo Ideapad 12',
        price: 55999 ,
        category:'Electronics'
      },
      { 
        id: 4,
        pic: './img/electronics/mouse.jpg',
        name: 'Zebronics Transformer-M',
        price: 399 ,
        category:'Electronics'
      },
      { 
        id: 5,
        pic: './img/electronics/wondertainment.jpg',
        name: 'Samsung Wondertainment-LED',
        price: 15999 ,
        category:'Electronics'
      },
      { 
        id: 6,
        pic: './img/electronics/hp.png',
        name: 'HP Laptop',
        price: 42999 ,
        category:'Electronics'
      },
      { 
        id: 7,
        pic: './img/electronics/c2y1.jfif',
        name: 'realme C21Y',
        price: 9999 ,
        category:'Electronics'
      },
      { 
        id: 8,
        pic: './img/electronics/realme8.jfif',
        name: 'realme 8',
        price: 17999 ,
        category:'Electronics'
      },
      { 
        id: 9,
        pic: './img/electronics/aspire7.webp',
        name: 'acer Aspire 7',
        price: 52999 ,
        category:'Electronics'
      },
      { 
        id: 10,
        pic: './img/electronics/immortals.jpg',
        name: 'boAt Immortal 400',
        price: 1999 ,
        category:'Electronics'
      },
      { 
        id: 11,
        pic: './img/electronics/watch.jpg',
        name: 'boAt Smart Watch',
        price: 1599 ,
        category:'Electronics'
      },
      { 
        id: 12,
        pic: './img/electronics/powerbank.jpg',
        name: 'Mi Laptop PowerBank',
        price: 1799 ,
        category:'Electronics'
      },
      { 
        id: 13,
        pic: './img/electronics/earbuds.jpg',
        name: 'realme Buds',
        price: 999,
        category:'Electronics'
      }
    ])



    
    const[fashionData, setFashionData]=useState([
      { 
        id: 14,
          pic: './img/product/product-7.jpg',
          name: 'HRX - Shocks (Pair of 3)',
          price: 599 ,
          category:'Fashion Wear'
        },
        { 
          id: 15,
          pic: './img/product/product-4.jpg',
          name: 'HRX - T-Shirt (Blue)',
          price: 2999 ,
          category:'Fashion Wear'
        },
        { 
          id: 16,
          pic: './img/product/product-5.jpg',
          name: 'PUMA - Sneaker (White)',
          price: 5999 ,
          category:'Fashion Wear'
        },
        { 
          id: 17,
          pic: './img/product/product-6.jpg',
          name: 'PUMA - T-Shirt (Black)',
          price: 2999 ,
          category:'Fashion Wear'
        },
        { 
          id: 18,
          pic: './img/product/product-10.jpg',
          name: 'HRX - Sneaker (Black,Red)',
          price: 2999 ,
          category:'Fashion Wear'
        },
        { 
          id: 19,
          pic: './img/product/product-11.jpg',
          name: 'Roadster - Sneakers (Grey)',
          price: 1999 ,
          category:'Fashion Wear'
        },
        { 
          id: 20,
          pic: './img/product/product-12.jpg',
          name: 'NIKE - Jogger (Black)',
          price: 1599 ,
          category:'Fashion Wear'
        },
      { 
        id: 21,
          pic: './img/product/product-1.jpg',
          name: 'HRX - T-Shirt (Red)',
          price: 999 ,
          category:'Fashion Wear'
        },
        { 
          id: 22,
          pic: './img/product/category-3.jpg',
          name: 'Adidas - Sweatshirt (White)',
          price: 5895 ,
          category:'Fashion Wear'
        },
        { 
          id: 23,
          pic: './img/product/buy-2.jpg',
          name: 'HRX - Sneakers (Black)',
          price: 1999 ,
          category:'Fashion Wear'
        },
        { 
          id: 24,
          pic: './img/product/buy-3.jpg',
          name: 'HRX - Joggers (Grey)',
          price: 1399 ,
          category:'Fashion Wear'
        },
        
        { 
          id: 25,
          pic: './img/product/category-2.jpg',
          name: 'GUCCI - Sneakers (White)',
          price: 11799 ,
          category:'Fashion Wear'
        },
        { 
          id: 26,
          pic: './img/product/category-1.jpg',
          name: 'Sparks - Sneakers (Orange)',
          price: 999 ,
          category:'Fashion Wear'
        }
     ])




  
    const[items, setItems]=useState(
      [
        { 
          id: 23,
          pic: './img/product/buy-2.jpg',
          name: 'HRX - Sneakers (Black)',
          price: 1999 ,
          category:'Fashion Wear'
        },
        { 
          id: 10,
          pic: './img/electronics/immortals.jpg',
          name: 'boAt Immortal 400',
          price: 1999,
          category:'Electronics'
        },
        { 
          id: 11,
          pic: './img/electronics/watch.jpg',
          name: 'boAt Smart Watch',
          price: 1599,
          category:'Electronics'
        },
      ]
    )
    const [selected, setSelected]=useState()
    const deleteItem =(id)=>{
      setItems(items.filter((items)=>items.id!==id))
      console.log(items)
    }
    const get = (id)=>{
      electronicsData.map((electronicsData)=>
      electronicsData.id===id && setSelected(electronicsData),
      
      )
    }

    const gett = (id)=>{
      fashionData.map((fashionData)=>
      fashionData.id===id && setSelected(fashionData),
      
      )
    }

    const add =(id)=>{
      setItems([...items,selected])
}
  const added =(id)=>{
      fashionData.map((fashionData)=>
      fashionData.id===id && setItems([...items,fashionData])
      )
  }
  const addedd =(id)=>{
      electronicsData.map((electronicsData)=>
      electronicsData.id===id && setItems([...items,electronicsData])
      )
  }
 
  

    const lhsorted=()=> {
      
        const sortted = [...fashionData].sort((a,b)=>{
          return a.price-b.price
          
         } )
         console.log(sortted);
         setFashionData(sortted);
        }
  const [type,setType]=useState('')
  console.log(type)
  if(type==='lhsortt'){lhsorted()
   setType("sort")
  }; 



  const hlsorted =()=>{
    const sortted = [...fashionData].sort((a,b)=>{
      return b.price-a.price
      
     } )
     console.log(sortted);
     setFashionData(sortted);
  }

  if(type==='hlsortt'){
    hlsorted()
    setType("sort")
  }

  

  const popularity=()=>{
    const sortted = [...fashionData].sort((a,b)=>{
      return a.id-b.id
      
     } )
     console.log(sortted);
     setFashionData(sortted);
  }
 if(type==='popularity'){
   popularity()
   setType("sort")
 }
 if(type==='sortby'){
   popularity()
   setType("sort")
 }

















 const lhsortede=()=> {
      
  const sortted = [...electronicsData].sort((a,b)=>{
    return a.price-b.price
    
   } )
   console.log(sortted);
   setElectronicsData(sortted);
  }
const [typee,setTypee]=useState('')
console.log(typee)
if(typee==='lhsortt'){lhsortede()
setTypee("sort")
}; 



const hlsortede =()=>{
const sortted = [...electronicsData].sort((a,b)=>{
return b.price-a.price

} )
console.log(sortted);
setElectronicsData(sortted);
}

if(typee==='hlsortt'){
hlsortede()
setTypee("sort")
}



const popularitye=()=>{
const sortted = [...electronicsData].sort((a,b)=>{
return a.id-b.id

} )
console.log(sortted);
setElectronicsData(sortted);
}
if(typee==='popurarity'){
popularitye()
setTypee("sort")
}
if(typee==='sortby'){
popularitye()
setTypee("sort")
}



const[toggSrch, setToggSrch]=useState(false)
const toggleSearch=()=>{
  
  setToggSrch(!toggSrch)
  console.log(toggSrch)
}



const [hmenut, setHmenut]=useState(false)
const clhmenu=()=>{
  console.log('click')
  console.log(hmenut)

  setHmenut(false)
}
// const[togh, setTogh]=useState(false)
const toggleHamburger=()=>{
  console.log(hmenut)
  setHmenut(true)
}


  return (
  <Router>

    <div className="App">
       <Nav popup={()=> setClose(!close)} toggleSearch={toggleSearch} toggleHamburger={toggleHamburger} toggSrc={toggSrch}/>
       {close && <Popup toggle={()=>setClose(!close)}/>}
       {product && <Card hide={()=>setProduct(!product)} add={add} order={selected}/>}
       {hmenut&& <Menu toggSrc={toggSrch} popup={()=> setClose(!close)} closehmenu={clhmenu} hmenut={hmenut}/>}

       
        
       <Routes>
            <Route exact path = "/" element={
           <div>
             <Carosel/>
             <Products electronicsData={electronicsData} get={get} show={()=>setProduct(!product)}/>
             <Banner/>
             <Fasion fashionData={fashionData} gett={gett} showw={()=>setProduct(!product)}/>
             <Sponsers/>
           </div>           
          } />

            
            <Route path = "/cart" element={<Cart onDelete={deleteItem} items={items}/>} />
            <Route path = "/viewele" element={<Viewele typee={setTypee} electronicsData={electronicsData}  add={addedd} get={get} show={()=>setProduct(!product)} />} />
            <Route path = "/viewfas" element={<Viewfas type={setType} fashionData={fashionData}  add={added} gett={gett} show={()=>setProduct(!product)} />} />
            
       </Routes>





       
       <Footer/>
    </div>

 </Router>

  );
}

export default App;
