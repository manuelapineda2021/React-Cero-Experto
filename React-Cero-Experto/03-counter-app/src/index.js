import React from "react";
import { createRoot } from 'react-dom/client';
import PrimerApp from "./PrimerApp";
import './index.css';

const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);
root.render(<PrimerApp />);
