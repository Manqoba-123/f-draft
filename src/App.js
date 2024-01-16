import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import FrameOne from './components/FrameOne';

const theme = {
  colors:{
    body: "#a0a0a0",
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Router>
          <GlobalStyles />
          <Routes>
            <Route path='/' element={<FrameOne />} />
          </Routes>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
