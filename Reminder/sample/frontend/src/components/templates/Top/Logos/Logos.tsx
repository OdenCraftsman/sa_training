import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import reactLogo from '~/react.svg';
// import viteLogo from '~/vite.svg';
import muiLogo from '@/assets/mui.svg';
import reactRouterLogo from '@/assets/react-router.svg';
import reactHookFormLogo from '@/assets/react-hook-form.svg';
import styled from '@emotion/styled';

export const Logos: React.FC = () => {
  return (
    <Box>
      {/* Vite も勉強してほしいが，難しいので一旦スキップ */}
      {/* <Link to="https://vitejs.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </Link> */}

      <Link to="https://ja.react.dev" target="_blank">
        <StyledLogoImg src={reactLogo} className="react" alt="React logo" />
      </Link>

      <Link to="https://mui.com/material-ui/" target="_blank">
        <StyledLogoImg src={muiLogo} alt="Mui logo" />
      </Link>

      <Link to="https://reactrouter.com/en/main" target="_blank">
        <StyledLogoImg src={reactRouterLogo} alt="React Router logo" />
      </Link>
      <Link to="https://react-hook-form.com/" target="_blank">
        <StyledLogoImg src={reactHookFormLogo} alt="React Hook Form logo" />
      </Link>
    </Box>
  );
};

const StyledLogoImg = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    &.react {
      animation: logo-spin infinite 20s linear;
    }
  }
`;
