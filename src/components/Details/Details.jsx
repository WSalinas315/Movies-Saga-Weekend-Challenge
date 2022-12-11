import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Details() {

  // get detail URL from the store
  const url = useSelector(store => store.detailURL);

  // useEffect(() => {
  // }, []);

  return (
    <div>
      {console.log('URL on details page:', url)}
      <p>HELLO</p>
    </div>
  )
}