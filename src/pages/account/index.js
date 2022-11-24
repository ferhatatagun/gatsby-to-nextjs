import React, { useEffect } from 'react';
import { useRouter } from "next/router";

const OrderIndexPage = (props) => {
  const router = useRouter();
  useEffect(() => {
    router.push('/account/orders/');
  }, [router]);

  return <React.Fragment />;
};

export default OrderIndexPage;
