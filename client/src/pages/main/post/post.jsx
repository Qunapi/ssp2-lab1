import styled from "@emotion/styled";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import { getBackendApi } from "../../../helpers/getBackendApi";
import { Tag, Tags } from "../../../components/tags/Tags";

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  max-width: 780px;
  padding: 8 0px;
  margin-top: 16px;
  text-decoration: none;
`;

const Title = styled.h2`
  font-size: 32px;
  margin: 8px 0;
  padding: 0 8px;
`;

const Img = styled.img`
  border-radius: 0px;
`;

const Description = styled.div`
  padding: 8px;
`;

const Author = styled.div`
  color: ${(props) => props.theme.font.primary};
  margin: 0 8px 8px;
`;

const StyledCard = styled(Card)`
  /* transition-duration: 5s; */
  transition: all 0.2s ease-out !important;
  /* transition-duration: 0.6s !important; */
  &:hover {
    /* transition-duration: 0÷6s; */
    box-shadow: 0px 4px 4px rgba(38, 38, 38, 0.2);
    transform: translate(1px, 1px);
    /* border: 1px solid #cccccc; */
    background-color: white;
  }
`;

export const Post = ({ post }) => {
  return (
    <Wrapper to={`post/${post.id}`}>
      <StyledCard>
        <Title>{post.header}</Title>
        <Tags>
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <Img src={`${getBackendApi()}/${post.img}`}></Img>
        <Description>{post.description}</Description>
        <Author>{post.author}</Author>
      </StyledCard>
    </Wrapper>
  );
};
