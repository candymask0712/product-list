import BrandFilter from '../components/filters/BrandFilter';
import CategoryFilter from '../components/filters/CategoryFilter';
import ColorFilter from '../components/filters/ColorFilter';
import PriceFilter from '../components/filters/PriceFilter';
import ProductList from '../components/productList/ProductList';

import { config } from '../config/config';
import axios from 'axios';
import styled from 'styled-components';

import { useEffect, useState } from 'react';

const Container = styled.div`
  width: 100%;
  display: flex;
  max-width: 1200px;
`;
const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const FilterContainer = styled.div`
  width: 200px;
`;

interface ListDetail {
  brand: string;
  category_id: number;
  color: string;
  id: number;
  image: string;
  name: string;
  original_price: number;
  retailer_id: number;
  sales_price: number;
}

const List = () => {
  const url = config.development.url;
  const [brandList, setBrandList] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMinPrice, setSelectedMinPrice] = useState(0);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState<number | string>(
    100000000
  );

  const [listData, setListData] = useState<{ products?: []; total?: number }>(
    {}
  );

  useEffect(() => {
    axios
      .get(`${url}/brands`)
      .then((Response) => {
        setBrandList(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });

    axios
      .get(`${url}/colors`)
      .then((Response) => {
        setColorList(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });

    axios
      .get(`${url}/categories`)
      .then((Response) => {
        setCategoryList(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  useEffect(() => {
    const parameter = `?minPrice=${selectedMinPrice}&&maxPrice=${selectedMaxPrice}&&color=${selectedColor}&&brand=${selectedBrand}&&categoryId=${selectedCategory}`;
    axios
      .get(`${url}/products/${parameter}`)
      .then((Response) => {
        setListData(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, [
    selectedBrand,
    selectedColor,
    selectedCategory,
    selectedMinPrice,
    selectedMaxPrice
  ]);

  return (
    <Container>
      <FilterContainer>
        <CategoryFilter
          categoryList={categoryList}
          setSelectedCategory={setSelectedCategory}
        ></CategoryFilter>
        <BrandFilter
          brandList={brandList}
          setSelectedBrand={setSelectedBrand}
        ></BrandFilter>
      </FilterContainer>
      <MainContainer>
        <PriceFilter
          setSelectedMinPrice={setSelectedMinPrice}
          setSelectedMaxPrice={setSelectedMaxPrice}
        ></PriceFilter>
        <ColorFilter
          colorList={colorList}
          setSelectedColor={setSelectedColor}
        ></ColorFilter>
        <ProductList listData={listData}></ProductList>
      </MainContainer>
    </Container>
  );
};

export default List;
