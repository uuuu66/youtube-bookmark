import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "../../atoms/Image";
import Title from "../../atoms/Title";
import Span from "../../atoms/Span";

const StyledCard = styled.div`
  width: 336px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;
  border: 1px solid black;
  cursor: pointer;
  transition: transform 250ms ease-in;

  &:hover {
    transform: scale(1.02);
  }
`;

const StyledInfoGroup = styled.div`
  width: 20rem;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 12px;
  padding-right: 24px;

  > img {
    margin-right: 12px;
  }
`;

const StyledTextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = ({
  title,
  uploadedName,
  views,
  uploadedDate,
  alt,
  size,
  profileSrc,
  thumbnailSrc,
  ...rest
}) => {
  return (
    <StyledCard {...rest}>
      <Image alt={`thumbnail-${title}`} size="large" imgSrc={thumbnailSrc} />
      <StyledInfoGroup>
        <Image
          alt={`profile-${uploadedName}`}
          size="small"
          imgSrc={profileSrc}
          round
        />
        <StyledTextGroup>
          <Title level={3}>{title}</Title>
          <Span>{uploadedName}</Span>
          <Span>{views}</Span>
          <Span>{uploadedDate}</Span>
        </StyledTextGroup>
      </StyledInfoGroup>
    </StyledCard>
  );
};

Card.propsTypes = {
  size: PropTypes.string,
  alt: PropTypes.string,
  thumbnailSrc: PropTypes.string,
  profileSrc: PropTypes.string,
  title: PropTypes.string,
  uploadedName: PropTypes.string,
  views: PropTypes.string,
  uploadedDate: PropTypes.string,
};

Card.defaultProps = {
  size: "large",
  alt: "대체텍스트",
  thumbnailSrc: "https://img.hankyung.com/photo/202105/BF.26239388.1.jpg",
  profileSrc:
    "https://yt3.ggpht.com/yti/APfAmoF5LpsxlO9FFDXDiSliICHgjmcYhN0Z-HR91yUMdw=s48-c-k-c0x00ffffff-no-rj",
  title: "제목을 입력하세요",
  uploadedName: "작성자를 입력하세요",
  views: "조회수를 입력하세요",
  uploadedDate: "업로드날짜를 입력하세요",
};

export default Card;
