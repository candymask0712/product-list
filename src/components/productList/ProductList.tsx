import styled from 'styled-components';

type Obj = {
  total?: number;
  products?: [];
};

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

const Container = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
`;

const ProductContainer = styled.div`
  width: 25%;
  /* margin: 5px; */
`;

const Product = styled.div`
  width: 100%;
`;

const ProductImg = styled.img`
  width: 280px;
  object-fit: cover;
`;

const ProductList = (props: { listData: Obj }) => {
  let list = props.listData.products;
  return (
    <Container>
      {list
        ? list.map((el: ListDetail) => {
            return (
              <ProductContainer>
                <Product key={el.id}>
                  <ProductImg src={el.image}></ProductImg>
                  <div>{el.brand}</div>
                  <div>{el.name}</div>
                  <div>{el.sales_price}</div>
                  <div>
                    {el.original_price === el.sales_price
                      ? null
                      : Math.ceil(
                          ((el.original_price - el.sales_price) /
                            el.original_price) *
                            100
                        ) + `%할인`}
                  </div>
                </Product>
              </ProductContainer>
            );
          })
        : null}
    </Container>
  );
};

export default ProductList;
