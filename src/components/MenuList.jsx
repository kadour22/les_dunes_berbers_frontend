import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};


const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};



const MenuList = () => {

  const [menuItems, setMenuItems] = useState([]);
  const [category, setCategory] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);


  useEffect(() => {

    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/menu/menu/"
        );

        setMenuItems(response.data);

      } catch (error) {
        console.log(error);
      }
    };


    const fetchCategories = async () => {

      try {

        const response = await axios.get(
          "http://127.0.0.1:8000/menu/categories/"
        );

        setCategory(response.data);

      } catch(error){

        console.log(error);

      }

    };


    fetchMenuItems();
    fetchCategories();

  }, []);



  const menuItemsByCategory = async(categoryId)=>{

    try{

      const response = await axios.get(
        `http://127.0.0.1:8000/menu/menu/category/${categoryId}`
      );


      setMenuItems(response.data);
      setActiveCategory(categoryId);


    }catch(error){

      console.log(error);

    }

  };



  return (

<section className="min-h-screen bg-background py-32 px-6">


<div className="max-w-7xl mx-auto">


{/* HEADER */}

<motion.div

initial={{
 opacity:0,
 y:30
}}

animate={{
 opacity:1,
 y:0
}}

transition={{
 duration:0.7
}}

className="text-center mb-14"

>

<span className="uppercase tracking-[0.3em] text-sand text-xs">

Notre Menu

</span>


<h1 className="mt-5 font-heading text-5xl text-coffee">

Les saveurs des{" "}

<span className="text-gradient-gold italic">

Dunes Berbères

</span>

</h1>


</motion.div>





{/* CATEGORIES */}

<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:0.3
}}

className="flex flex-wrap justify-center gap-4 mb-14"

>


{category.map((cat)=>(


<motion.button

key={cat.id}

whileHover={{
scale:1.05
}}

whileTap={{
scale:0.95
}}

onClick={()=>menuItemsByCategory(cat.id)}

className={`px-6 py-3 rounded-full text-sm font-semibold transition ${
activeCategory === cat.id
?
"bg-gradient-gold text-coffee"
:
"bg-coffee/5 text-coffee"
}`}

>

{cat.name}

</motion.button>


))}


</motion.div>





{/* CARDS */}

<motion.div

variants={container}

initial="hidden"

animate="show"

className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"

>


{menuItems.map((item)=>(


<motion.div

key={item.id}

variants={cardAnimation}

whileHover={{
y:-10,
scale:1.02
}}

transition={{
type:"spring",
stiffness:250,
damping:20
}}

className="bg-white rounded-3xl overflow-hidden shadow-soft group"

>


<div className="h-60 overflow-hidden">


<motion.img

src={`http://127.0.0.1:8000${item.image}`}

alt={item.name}

whileHover={{
scale:1.12
}}

transition={{
duration:0.7
}}

className="w-full h-full object-cover"

/>


</div>




<div className="p-6">


<div className="flex justify-between">


<h2 className="font-heading text-2xl text-coffee">

{item.name}

</h2>


<span className="text-gradient-gold font-semibold">

{item.price} DT

</span>


</div>



<p className="mt-3 text-coffee/60">

{item.description}

</p>


</div>



</motion.div>


))}


</motion.div>


</div>


</section>

  );

};


export default MenuList;