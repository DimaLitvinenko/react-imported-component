import * as React from 'react';
import {isBackend} from './detectBackend';

const LazyBoundary: React.FC = ({children}) => <React.Fragment>{children}</React.Fragment>;

export default isBackend ? LazyBoundary : React.Suspense;