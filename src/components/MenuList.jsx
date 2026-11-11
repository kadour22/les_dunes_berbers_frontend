
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Utensils, RefreshCw } from "lucide-react";

const BASE_URL = "http://13.140.221.228:9000";

const API = {
  categories: `${BASE_URL}/menu/categories/`,
  menu: `${BASE_URL}/menu/menu/`,
  category: (id) => `${BASE_URL}/menu/menu/category/${id}/`,
};

// Handle different Django REST Framework response formats
const normalizeData = (data) => {
  const payload = data?.data ?? data;

  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.results)) return payload.results;
  if (Array.isArray(payload?.menu_items)) return payload.menu_items;
  if (Array.isArray(payload?.items)) return payload.items;

  return [];
};

// Handle absolute and relative image paths
const getImageUrl = (image) => {
  if (!image) return null;

  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  return `${BASE_URL}${image.startsWith("/") ? "" : "/"}${image}`;
};

const MenuList = () => {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retryKey, setRetryKey] = useState(0);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(API.categories);
        setCategories(normalizeData(response.data));
      } catch (err) {
        console.error("Categories error:", err);
      }
    };

    fetchCategories();
  }, []);

  // Fetch menu items whenever category changes
  const fetchMenu = useCallback(async (signal) => {
    setLoading(true);
    setError("");

    try {
      const url = selectedCategory
        ? API.category(selectedCategory)
        : API.menu;

      const response = await axios.get(url, { signal });

      setMenuItems(normalizeData(response.data));
    } catch (err) {
      if (err.code === "ERR_CANCELED") return;

      console.error("Menu error:", err);
      setMenuItems([]);
      setError("Impossible de charger le menu. Veuillez réessayer.");
    } finally {
      if (!signal.aborted) {
        setLoading(false);
      }
    }
  }, [selectedCategory]);

  useEffect(() => {
    const controller = new AbortController();

    fetchMenu(controller.signal);

    return () => controller.abort();
  }, [fetchMenu, retryKey]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const formatPrice = (price) => {
    const value = Number(price);

    return Number.isFinite(value) ? value.toFixed(2) : price;
  };

  return (
    <section className="min-h-screen bg-[#17140f] px-4 py-20 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
            <Coffee size={17} />
            Les Dunes Berbère
          </span>

          <h1 className="font-serif text-4xl font-bold sm:text-5xl md:text-6xl">
            Notre <span className="text-amber-500">Menu</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-stone-400 sm:text-base">
            Découvrez notre sélection de saveurs, préparées avec passion
            dans une ambiance chaleureuse et authentique.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-amber-500" />
        </motion.div>

        {/* Categories */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => handleCategoryChange(null)}
            className={`rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              selectedCategory === null
                ? "border-amber-500 bg-amber-500 text-[#17140f]"
                : "border-stone-700 bg-[#211d17] text-stone-300 hover:border-amber-500 hover:text-amber-500"
            }`}
          >
            Tous
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                String(selectedCategory) === String(category.id)
                  ? "border-amber-500 bg-amber-500 text-[#17140f]"
                  : "border-stone-700 bg-[#211d17] text-stone-300 hover:border-amber-500 hover:text-amber-500"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-stone-800 bg-[#211d17]"
              >
                <div className="h-56 animate-pulse bg-stone-800" />
                <div className="space-y-3 p-5">
                  <div className="h-5 w-2/3 animate-pulse rounded bg-stone-800" />
                  <div className="h-4 w-full animate-pulse rounded bg-stone-800" />
                  <div className="h-4 w-1/3 animate-pulse rounded bg-stone-800" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="py-16 text-center">
            <p className="mb-5 text-stone-400">{error}</p>

            <button
              onClick={() => setRetryKey((prev) => prev + 1)}
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-semibold text-[#17140f] transition hover:bg-amber-400"
            >
              <RefreshCw size={17} />
              Réessayer
            </button>
          </div>
        )}

        {/* Menu Items */}
        {!loading && !error && (
          <AnimatePresence mode="wait">
            {menuItems.length > 0 ? (
              <motion.div
                key={selectedCategory ?? "all"}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                {menuItems.map((item) => (
                  <motion.article
                    key={item.id}
                    whileHover={{ y: -7 }}
                    transition={{ duration: 0.25 }}
                    className="group overflow-hidden rounded-2xl border border-stone-800 bg-[#211d17] shadow-lg shadow-black/20 transition-colors hover:border-amber-500/50"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden bg-stone-900">
                      {item.image ? (
                        <img
                          src={getImageUrl(item.image)}
                          alt={item.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-stone-700">
                          <Coffee size={48} strokeWidth={1} />
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-4 py-2 text-sm font-bold text-amber-400 backdrop-blur-sm">
                        {formatPrice(item.price)} DT
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <h3 className="font-serif text-xl font-semibold text-white transition-colors group-hover:text-amber-400">
                          {item.name}
                        </h3>

                        <Utensils
                          size={17}
                          className="mt-1 shrink-0 text-amber-500"
                        />
                      </div>

                      <p className="line-clamp-3 text-sm leading-6 text-stone-400">
                        {item.description || "Une délicieuse création à découvrir."}
                      </p>

                      <div className="mt-5 h-px w-full bg-stone-800 transition-colors group-hover:bg-amber-500/40" />
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center"
              >
                <Coffee
                  size={48}
                  className="mx-auto mb-5 text-amber-500/60"
                  strokeWidth={1}
                />

                <h3 className="font-serif text-2xl text-white">
                  Aucun article disponible
                </h3>

                <p className="mt-3 text-stone-400">
                  Cette catégorie ne contient pas encore de produits.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default MenuList;
