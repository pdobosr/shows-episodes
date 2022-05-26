import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Show from "../components/Show";
import { getShows } from "../slices/showsSlice";
import { RootState } from "../store";

const ShowPage = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.shows);
  
  useEffect(() => {
    if(!data.length){
      dispatch(getShows());
    }
  }, [dispatch, data]);

  return <Show data={data} />;
};
export default ShowPage;
