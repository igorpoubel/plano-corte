import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  createContext,
  useContext,
  useState,
} from "react";

interface IContext {
  state: {
    chapa: {
      comprimento: number | null;
      largura: number | null;
    };
  };
  medidasChapa: (comprimento: number, largura: number) => void;
}

interface IDadosContext {
  chapa: {
    comprimento: number | null;
    largura: number | null;
  };
}

const PageContext = createContext<IContext>({
  state: {
    chapa: {
      comprimento: null,
      largura: null,
    },
  },
  medidasChapa: () => {},
});

const usePageContext = () => {
  return useContext(PageContext);
};

const PageProvider = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  const [state, setState] = useState<IDadosContext>({
    chapa: {
      comprimento: null,
      largura: null,
    },
  });

  const medidasChapa = (comprimento: number, largura: number) => {
    setState({
      ...state,
      chapa: {
        comprimento,
        largura,
      },
    });
  };

  return (
    <PageContext.Provider
      value={{
        state,
        medidasChapa,
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export { usePageContext, PageProvider };
