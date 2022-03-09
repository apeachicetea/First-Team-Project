import styled from "styled-components";
import { useState } from "react";
import { useParams, useMatch } from "react-router-dom";
import QuickPost from "./QuickPost";
import Loading from "../Components/Loading";
import PostListItem from "../Components/PostListItem";

const Wrapper = styled.div`
  width: 92%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const PostBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

const PostList = styled.ul``;

const PostFunctionContainer = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 30px;
`;

const PostSearchInput = styled.input`
  opacity: 0;
  display: inline-block;
  font-size: ${(props) => props.theme.fontSize.small};
  text-align: left;
  justify-content: center;
  //cursor: grab;
  width: 67%;
  height: 2rem;
  padding-left: 10px;
  border: 2px solid;
  border-radius: 3px;
`;

const PostSearchButton = styled.button`
  opacity: 0;
  background-color: ${(props) => props.theme.bgColor.skyblue};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSize.small};
  //margin-top: 20px;
  width: 16.5%;
  height: 2.4rem;
  margin-right: 40px;
  border: 2px solid;
  border-radius: 5px;
  cursor: pointer;
`;

const PostInsertButton = styled.button`
  background-color: ${(props) => props.theme.bgColor.skyblue};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSize.small};
  //margin-top: 20px;
  width: 16.5%;
  height: 2.4rem;
  margin-right: 40px;
  border: 2px solid;
  border-radius: 5px;
  cursor: pointer;
`;

const EmptyPostHolder = styled.span`
  padding-top: 50px;
  font-size: ${(props) => props.theme.fontSize.medium};
`;

function Post({ isLogin }) {
  const postMatch = useMatch("/post");
  const [data, setData] = useState({
    row: [
      {
        id: "1",
        userId: "1",
        username: "진",
        title: "아직 한개 남았다",
        tag: ["양배추"],
        content: "양배추로 뭐 해먹을 수 있어?",
        createdAt: "2022-03-04-09:31",
        comment: [
          {
            id: "1",
            userId: "4",
            postId: "1",
            username: "제드",
            content: "걍 버려라 양배추 왜먹음??????",
            createdAt: "220308",
          },
        ],
      },
      {
        id: "2",
        userId: "2",
        username: "이즈리얼",
        title: "많고 많은~",
        tag: ["식빵", "계란"],
        content: "레시피 중에 신박한거 없냐?",
        createdAt: "2022-03-05-12:29",
        comment: [
          {
            id: "1",
            userId: "5",
            postId: "2",
            username: "가렌",
            content: "걍 토스트 해먹으셈;;",
            createdAt: "220308",
          },
          {
            id: "2",
            userId: "6",
            postId: "3",
            username: "럭스",
            content: "식빵에 계란옷 입혀서 구워먹으면 진짜 맛있어요!",
            createdAt: "220308",
          },
        ],
      },
      {
        id: "3",
        userId: "3",
        username: "에코",
        title: "요리 잘하는 사람?",
        tag: ["만두", "족발", "양파"],
        content: "오늘안에 먹어야하는데 요리 잘하는 사람 훈수 좀ㅋ",
        createdAt: "2022-03-06-13:49",
        comment: [],
      },
      {
        id: "4",
        userId: "4",
        username: "빅토르",
        title: "요리 추천 좀",
        tag: ["양파", "당근", "계란"],
        content: "저 재료로 참신한 거 없냐?",
        createdAt: "2022-03-07-12:59",
        comment: [
          {
            id: "1",
            userId: "5",
            postId: "2",
            username: "나미",
            content:
              "캔참치 사와서 야채썰고 계란 풀고 참치 넣고 전부치면 맛있어요~",
            createdAt: "220308",
          },
          {
            id: "2",
            userId: "6",
            postId: "3",
            username: "다리우스",
            content: "계란국 끓여도 될듯??",
            createdAt: "220308",
          },
        ],
      },
      {
        id: "5",
        userId: "5",
        username: "블리츠",
        title: "내 냉장고를 부탁해!",
        tag: ["사골국물", "떡", "계란"],
        content:
          "냉장고에 있는 재료 오늘까지 먹어야하는데 떡국말고 누가 다른 레시피 추천해줄 사람??",
        createdAt: "2022-03-07-12:37",
        comment: [
          {
            id: "1",
            userId: "5",
            postId: "2",
            username: "빅토르",
            content: "만두 사와서 만둣국해먹으셈 ㄹㅇ꿀맛",
            createdAt: "220308",
          },
          {
            id: "2",
            userId: "6",
            postId: "3",
            username: "카타리나",
            content:
              "나였으면 햄사와서 부대찌개만들어서 밥에다 계란후라이 각이다",
            createdAt: "220308",
          },
        ],
      },
    ],
  });
  const { newTag } = useParams();
  const [keyword, setKeyword] = useState("가자");
  const posts = data?.row ? Object.values(data.row).reverse() : undefined;

  return (
    <>
      {false ? (
        <Loading />
      ) : (
        <Wrapper>
          {isLogin ? (
            <PostFunctionContainer>
              <PostSearchInput />
              <PostSearchButton></PostSearchButton>
              <PostInsertButton>Post</PostInsertButton>
            </PostFunctionContainer>
          ) : null}
          {posts ? (
            <PostList>
              {posts.map((item, i) => (
                <PostListItem
                  isLogin={isLogin}
                  key={i}
                  //item={item}
                  id={item.id}
                  userId={item.userId}
                  title={item.title}
                  tag={item.tag}
                  newTag={newTag}
                  name={item.username}
                  create={item.createdAt}
                  content={item.content}
                  comment={item.comment}
                ></PostListItem>
              ))}
            </PostList>
          ) : (
            <EmptyPostHolder>포스트가 아직 없어요</EmptyPostHolder>
          )}
        </Wrapper>
      )}
      {postMatch ? null : (
        <PostBox>
          <QuickPost />
        </PostBox>
      )}
    </>
  );
}

export default Post;
