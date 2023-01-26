import { useEffect } from "react";
import { usePageContext } from "../../../context";

const SidePage = () => {
  const { state, medidasChapa } = usePageContext();

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
      SidePage{" "}
      <button
        onClick={() => {
          medidasChapa(2750, 1840);
        }}
      >
        Clicar
      </button>
    </div>
  );
};

export default SidePage;
