import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center mx-auto text-light">
        <h1>404 | This page could not be found.</h1>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 800px;
  min-height: 90vh;
`;

export default NotFoundPage;
