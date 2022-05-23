import styled from 'styled-components';

const Container = styled.aside`
  display: flex;
  flex-direction: row;
`;

const Color = styled.div`
  margin: 10px;
`;

const ColorFilter = (props: {
  colorList: { name: string }[];
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const list = props.colorList;

  const getColor = (e: any) => {
    props.setSelectedColor(e.target.innerHTML);
  };

  const colorToAll = () => {
    props.setSelectedColor('');
  };

  return (
    <Container>
      <Color onClick={colorToAll}>All COLORS</Color>
      {list.map((el: { name: string }) => {
        return (
          <Color key={el.name} onClick={getColor}>
            {el.name}
          </Color>
        );
      })}
    </Container>
  );
};

export default ColorFilter;
