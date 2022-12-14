import styled from "styled-components";
import { categoriesGender } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: black;
`;

const Categories = () => {
    return (
        <Container>
            {categoriesGender.map((item) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Categories;