import styled from 'styled-components';

const Container = styled.aside``;

const CategoryFilter = (props: {
  categoryList: { name: string; id: number }[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const list = props.categoryList;

  const getCategory = (e: any) => {
    let tmp = 0;
    list.forEach((el: { name: string; id: number }) => {
      if (el.name === e.target.innerHTML) tmp = el.id;
    });
    props.setSelectedCategory(String(tmp));
  };

  const categoryToAll = () => {
    props.setSelectedCategory('');
  };

  return (
    <Container>
      <div onClick={categoryToAll}>All CATEGORIES</div>
      {list.map((el: { name: string }) => {
        return (
          <div key={el.name} onClick={getCategory}>
            {el.name}
          </div>
        );
      })}
    </Container>
  );
};

export default CategoryFilter;
