import { createContext } from 'react';
import { Interface } from 'readline';

interface IAuthContext {
  name: string;
}

const authContext = createContext<IAuthContext>({} as IAuthContext);

export default authContext;
