import React, { useState, useEffect, useCallback } from "react";
import { ThemeProvider } from "styled-components";
import Button from "./components/atoms/Button";
import Dialog from "./components/molecules/Dialog";
import Navigation from "./components/organisms/Navigation";
import VideoList from "./pages/Main/VideoList/VideoList";
import VideoDetail from "./pages/Detail";

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
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [dialog, setDialog] = useState(false);

  const search = useCallback(
    query => {
      setSelectedVideo(null);
      youtube
        .search(query)
        .then(videos => {
          setVideos(videos);
        })
        .catch(error => console.log("error", error));
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos))
      .catch(error => console.log("error", error));
  }, [youtube]);

  const selectVideo = video => {
    console.log("selectVidoe", video);
    setSelectedVideo(video);
  };

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

        <section>
          {selectedVideo && (
            <div>
              <VideoDetail video={selectedVideo} />
            </div>
          )}
          <div>
            <VideoList
              videos={videos}
              onVideoClick={selectVideo}
              display={selectedVideo ? "list" : "grid"}
            />
          </div>
        </section>
      </>
    </ThemeProvider>
  );
}

export default App;
