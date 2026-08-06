import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const BASE_URL = "https://les-dunes-berbers.onrender.com/menu";

const MenuList = () => {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch Categories
  useEffect(() => {
    axios
      .get(`${BASE_URL}/categories/`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Fetch Menu
  useEffect(() => {
    fetchMenu(selectedCategory);
  }, [selectedCategory]);

  const fetchMenu = async (categoryId = null) => {
    setLoading(true);

    try {
      let url = `${BASE_URL}/menu/`;

      if (categoryId) {
        url = `${BASE_URL}/menu/category/${categoryId}/`;
      }

      const res = await axios.get(url);
      setMenuItems(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-[#f8f5ef] min-h-screen">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-4xl font-bold text-center mb-10">
          Notre Menu
        </h2>

        {/* Categories */}

        <div className="flex flex-wrap justify-center gap-4 mb-12">

          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full transition ${
              selectedCategory === null
                ? "bg-amber-700 text-white"
                : "bg-white border"
            }`}
          >
            Tous
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full transition ${
                selectedCategory === cat.id
                  ? "bg-amber-700 text-white"
                  : "bg-white border"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Loading */}

        {loading ? (
          <div className="text-center text-lg">
            Loading...
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {menuItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-60 w-full object-cover"
                  />

                  <div className="p-6">

                    <div className="flex justify-between items-center mb-3">

                      <h3 className="text-xl font-bold">
                        {item.name}
                      </h3>

                      <span className="text-amber-700 font-bold">
                        {item.price} DT
                      </span>

                    </div>

                    <p className="text-gray-600">
                      {item.description}
                    </p>

                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default MenuList;