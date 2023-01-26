import { GlobalStyle, Wrapper } from "./Style";

import Page from "./components/main/Page";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Page />
      </Wrapper>
    </>
  );
}

export default App;
