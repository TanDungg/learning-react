import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 400px;
  margin: 15px;
  position: relative;
`;

const Image = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
  border-radius: inherit;
`;

const ChildrenDiv = styled.div`
  position: absolute;
  width: calc(100% - 36px);
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: #fff;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
  bottom: 0;
`;

const ChildrenDivTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const ChildrenDivTopUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const ChildrenDivTopUserAvata = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;

const ChildrenDivTopUserName = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: #333;
`;

const ChildrenDivFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChildrenDivFooterTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #000;
`;

const ChildrenDivFooterNumber = styled.span`
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(
    86.88deg,
    #7d6aff 1.38%,
    #ffb86c 64.35%,
    #fc2872 119.91%
  );
  color: transparent;
  --webkit-background-clip: text;
  background-clip: text;
`;

const Card = () => {
  return (
    <Div>
      <Image>
        <Img
          src="https://cdn.dribbble.com/userupload/9946575/file/original-71fc4e32c3a0011358501321559c7886.png?resize=450x338&vertical=center"
          alt=""
        />
      </Image>
      <ChildrenDiv>
        <ChildrenDivTop>
          <ChildrenDivTopUser>
            <ChildrenDivTopUserAvata
              src="https://cdn.dribbble.com/userupload/11087034/file/original-a28a6194ffa21d0d91df67377527c689.png?resize=450x338&vertical=center"
              alt=""
            />
            <ChildrenDivTopUserName>@user</ChildrenDivTopUserName>
          </ChildrenDivTopUser>
          <div>256</div>
        </ChildrenDivTop>
        <ChildrenDivFooter>
          <ChildrenDivFooterTitle>Học React</ChildrenDivFooterTitle>
          <ChildrenDivFooterNumber>12000 SLP</ChildrenDivFooterNumber>
        </ChildrenDivFooter>
      </ChildrenDiv>
    </Div>
  );
};

export default Card;
