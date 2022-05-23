import styled from 'styled-components';

const Container = styled.aside`
  margin: 30px 0px;
`;

const BrandFilter = (props: {
  brandList: { name: string }[];
  setSelectedBrand: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const list = props.brandList;

  const getBrand = (e: any) => {
    props.setSelectedBrand(e.target.innerHTML);
  };

  const brandToAll = () => {
    props.setSelectedBrand('');
  };

  return (
    <Container>
      <div onClick={brandToAll}>All BRAND</div>
      {list.map((el: { name: string }) => {
        return (
          <div key={el.name} onClick={getBrand}>
            {el.name}
          </div>
        );
      })}
    </Container>
  );
};

export default BrandFilter;
