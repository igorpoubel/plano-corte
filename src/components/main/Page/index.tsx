import { PageProvider } from "../../../context";
import SidePage from "../SidePage";
import { Wrapper } from "./Style";

const Page = () => {
  return (
    <PageProvider>
      <Wrapper>
        <SidePage />
        <div>Page</div>
      </Wrapper>
    </PageProvider>
  );
};

export default Page;
