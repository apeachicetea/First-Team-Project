import { useState } from "react";
import styled from "styled-components";

const PostItem = styled.li`
  list-style: none;
  width: 550px;
  align-items: center;
  text-align: center;
  padding: 10px;
  border: 3px solid black;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.bgColor.green};
`;

const PostCard = styled.div``;
const PostInCard = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.fontSize.small};
  justify-content: space-between;
  margin: 10px;
  align-items: center;
`;
const Title = styled.div`
  font-size: ${(props) => props.theme.fontSize.medium};
  margin: 5px 10px;
`;

const Count = styled.div`
  margin-right: 8px;
`;

const Name = styled.div``;

const Tags = styled.div``;

const Tag = styled.div`
  margin-left: 50px;
  color: ${(props) => props.theme.bgColor.cyan};
  font-size: ${(props) => props.theme.fontSize.small};
  display: flex;
  justify-content: flex-start;
  margin-left: 10px;
`;
const Create = styled.div`
  margin-right: 10px;
`;
const Content = styled.div`
  background-color: ${(props) => props.theme.bgColor.white};
  font-size: ${(props) => props.theme.fontSize.small};
  text-align: left;
  border: 2px solid black;
  margin: 5px;
  padding: 10px 20px;
`;
const Btn = styled.button`
  font-size: ${(props) => props.theme.fontSize.smallLarge};
  background-color: inherit;
  border: none;
  padding: 2px 3px;
  margin-right: 5px;
  cursor: pointer;
`;

const Like = styled(Btn)`
  margin-right: 6px;
`;

const LeftPost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const RightPost = styled.div`
  display: flex;
  align-items: center;
`;

const MiddleBox = styled.div`
  display: flex;
  margin: 10px;
  font-size: ${(props) => props.theme.fontSize.small};
`;

const PostCommentContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PostCommentInput = styled.input`
  width: 350px;
  padding: 7px 10px;
  margin: 10px;
  border: 2px solid black;
`;

const PostCommentList = styled.ul`
  list-style: none;
  width: 522px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  border: 3px solid black;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.bgColor.green};
`;

const PostCommentBox = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 2px solid black;
  margin-bottom: 10px;
  width: 95%;
  height: 15px;
  background-color: ${(props) => props.theme.bgColor.white};
`;

const PostCommentLeft = styled.div`
  display: flex;
`;

const PostCommentRight = styled.div`
  display: flex;
`;
const PostCommentWriter = styled.div`
  font-size: ${(props) => props.theme.fontSize.tiny};
  margin-right: 50px;
`;

const PostCommentContent = styled.div`
  font-size: ${(props) => props.theme.fontSize.tiny};
  margin-right: 5px;
`;
const PostCommentButton = styled.button`
  background-color: inherit;
  font-size: ${(props) => props.theme.fontSize.smallLarge};
  border: none;
  cursor: pointer;
`;

// isLogin, title, username, createdAt, tag, content, comment
function PostListItem({
  isLogin,
  id,
  userId,
  title,
  name,
  create,
  tag,
  newTag,
  content,
  comment,
}) {
  const comList = comment.reverse();
  const tagList = newTag ? newTag : tag;
  const [show, setShow] = useState(false);

  return (
    <PostItem>
      <PostCard>
        <Title>{title}</Title>
        <PostInCard>
          <LeftPost>
            {show ? (
              <Like onClick={() => setShow(!show)}>👍</Like>
            ) : (
              <Like onClick={() => setShow(!show)}>👍🏻</Like>
            )}
            {/* {show ? (
              <Like onClick={() => setShow(!show)}>🙆🏻‍♂️</Like>
            ) : (
              <Like onClick={() => setShow(!show)}>🙅🏻‍♀️</Like>
            )} */}
            <Btn>🖊</Btn>
            <Btn>✂️</Btn>
          </LeftPost>
          <RightPost>{create}</RightPost>
        </PostInCard>
        <MiddleBox>
          <Count>따봉 12개</Count>
          <Name>{name}</Name>
        </MiddleBox>
        <Tags>
          <Tag>{tag.map((el) => `#${el} `)}</Tag>
        </Tags>

        <Content>{content}</Content>
      </PostCard>
      {isLogin ? (
        <PostCommentContainer>
          <PostCommentInput placeholder="댓글은 여기에 입력하세요" />
          <PostCommentButton>✍️</PostCommentButton>
        </PostCommentContainer>
      ) : null}

      {comList.length !== 0 ? (
        <PostCommentList>
          {comList.map((el, i) => (
            <PostCommentBox key={i}>
              <PostCommentLeft>
                <PostCommentWriter>{el.username}</PostCommentWriter>
                <PostCommentContent>{el.content}</PostCommentContent>
              </PostCommentLeft>

              {isLogin ? (
                <PostCommentRight>
                  <PostCommentButton>✂️</PostCommentButton>
                </PostCommentRight>
              ) : null}
            </PostCommentBox>
          ))}
        </PostCommentList>
      ) : null}
    </PostItem>
  );
}

export default PostListItem;

// {
//   show ? (
//     <Like onClick={() => setShow(!show)}>🥰</Like>
//   ) : (
//     <Like onClick={() => setShow(!show)}>😰</Like>
//   );
// }
// {

// }
// {
//   show ? (
//     <Like onClick={() => setShow(!show)}>❗️</Like>
//   ) : (
//     <Like onClick={() => setShow(!show)}>❔</Like>
//   );
// }
