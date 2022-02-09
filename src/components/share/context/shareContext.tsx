import { createContext, Dispatch, FC, useState } from 'react';

type ShareData = {
  show: boolean;
  url: string;
};

type ShareContextProps = {
  shareData: ShareData;
  setShareData: Dispatch<React.SetStateAction<ShareData>>;
};

const defaultValue: ShareContextProps = {
  shareData: {
    show: false,
    url: '',
  },
  setShareData: () => {},
};

const ShareContext = createContext<ShareContextProps>(defaultValue);

const ShareContextProvider: FC = ({ children }) => {
  const [shareData, setShareData] = useState(defaultValue.shareData);
  return (
    <ShareContext.Provider value={{ shareData, setShareData }}>
      {children}
    </ShareContext.Provider>
  );
};

export { ShareContext, ShareContextProvider };
