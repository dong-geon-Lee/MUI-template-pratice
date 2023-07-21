import { FC } from 'react';

import { useSnackbar, OptionsObject } from 'notistack';

interface IProps {
  setUseSnackbarRef: (showSnackbar: any) => void;
}

const InnerSnackbarUtilsConfigurator: FC<IProps> = (props: IProps) => {
  props.setUseSnackbarRef(useSnackbar());
  return null;
};

let useSnackbarRef: any;
const setUseSnackbarRef = (useSnackbarRefProp: any) => {
  useSnackbarRef = useSnackbarRefProp;
};

export const SnackbarUtilsConfigurator = () => {
  return <InnerSnackbarUtilsConfigurator setUseSnackbarRef={setUseSnackbarRef} />;
};

export default function toast(msg: string, options: OptionsObject = {}) {
  useSnackbarRef.enqueueSnackbar(msg, options);
}
