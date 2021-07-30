import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Button from "./components/atoms/Button";
import Dialog from "./components/molecules/Dialog";
import Navigation from "./components/organisms/Navigation";
import Card from "./components/molecules/Card";
import VideoList from "./pages/Main/VideoList/VideoList";

const theme = {
  palette: Object.freeze({
    red: "#cc0000",
    blue: "#065fd4",
    lightgray1: "#f8f8f8",
    lightgray2: "#e9e9e9",
    gray: "#909090",
    darkgray: "#606060",
    black: "#030303",
  }),
};

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [dialog, setDialog] = useState(false);

  const search = query => {
    youtube
      .search(query)
      .then(videos => setVideos(videos))
      .catch(error => console.log("error", error));
  };

  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos))
      .catch(error => console.log("error", error));
  }, [youtube]);

  const onClick = () => {
    setDialog(true);
  };

  const onConfirm = () => {
    console.log("확인");
    setDialog(false);
  };

  const onCancel = () => {
    console.log("취소");
    setDialog(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <Navigation onSearch={search} />
        <Button size="large">BUTTON</Button>
        <Button size="large" color="gray">
          BUTTON
        </Button>
        <Button size="large" color="red" onClick={onClick}>
          삭제
        </Button>

        <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소"
          onConfirm={onConfirm}
          onCancel={onCancel}
          visible={dialog}
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
        <Card />
        <VideoList videos={videos} />
      </>
    </ThemeProvider>
  );
}

export default App;
