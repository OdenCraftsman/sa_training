import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Logos } from './Logos';
import './Top.css';
import { Link } from 'react-router-dom';

type TopProps = {
  data: { message: string } | null;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export const Top: React.FC<TopProps> = ({ data, count, setCount }) => {
  return (
    <>
      <Box sx={{ my: 2 }}>
        <Logos />
      </Box>

      <Typography variant="h2" component="h2">
        React + MUI + React Router + React Hook Form
      </Typography>

      <Box
        sx={{
          p: '2rem',
        }}
      >
        <Button
          variant="contained"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <Typography
          variant="body1"
          component="p"
          sx={{
            m: 2,
          }}
        >
          <code>src/App.tsx</code>{' '}
          からこの文章を見つけて，この文章を編集＆ファイル保存してみてください。
        </Typography>
      </Box>

      <Typography
        variant="body1"
        component="p"
        sx={{
          m: 2,
        }}
      >
        React logo や MUI logo
        をクリックして公式サイトにアクセスしてみてください。公式ドキュメントで勉強してみましょう！
      </Typography>

      <Typography variant="body1" component="p">
        サーバーから取得した文字列は...
      </Typography>

      <Typography variant="h1" component="h2">
        {data?.message || 'loading...'}
      </Typography>

      <Link to="about">About へ</Link>
    </>
  );
};
