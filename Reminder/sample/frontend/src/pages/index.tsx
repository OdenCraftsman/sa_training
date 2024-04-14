import { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Top } from '@/components/templates/Top';

const fetchHealth = async () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const response = await axios.get(apiUrl);
  return response.data;
};

const IndexPage = () => {
  const [count, setCount] = useState(0);

  const { isLoading, error, data } = useQuery({
    queryKey: ['helloWorld'], // キャッシュのキー
    queryFn: fetchHealth, // データ取得の関数
  });

  if (isLoading) {
    // NOTE: 本当は return <Loading /> とかにするべきだが，サーバーから取得したデータを表示していることを強調するために何もしないようにしている
    console.log('loading...');
  }

  if (error) {
    return 'error!';
  }

  return <Top data={data} count={count} setCount={setCount} />;
};

export default IndexPage;
