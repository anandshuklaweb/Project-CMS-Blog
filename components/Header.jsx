import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const categories = [
  { name: "React", slug: "react" },
  { name: "Web Development", slug: "web-dev" },
];

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-gray-500 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-semibold text-4xl text-white">
              FressBlogs
            </span>
          </Link>
        </div>

        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-10 text-lg font-medium cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
