import React, { FC } from "react";
import styled from "styled-components";
import { IShowInfo } from "../interfaces/IShowInfo";
import Card from "./Card";

interface ShowProps {
  data: IShowInfo[];
}

const Shows: FC<ShowProps> = ({ data }) => {
  if (!data) return <div>No shows...</div>;

  return (
    <ShowWrapper>
      <h1>Shows Page</h1>
      <ShowWrapper>
        {data.map((item, idx) => (
          <Card
            key={item.show.id}
            name={item.show.name}
            summary={item.show.summary}
            image={item.show.image}
            episode={item.episodes}
          />
        ))}
      </ShowWrapper>
    </ShowWrapper>
  );
};

export default Shows;

const ShowWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: auto;
  row-gap: 30px;
`;
