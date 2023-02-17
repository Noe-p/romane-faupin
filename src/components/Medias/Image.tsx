import styled from 'styled-components';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export function Image(props: ImageProps): JSX.Element {
  const { className } = props;

  return <Main className={className} {...props} />;
}

const Main = styled.img``;
