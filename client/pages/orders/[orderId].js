import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Router from 'next/router';
import UseRequest from '../../hooks/use-request';

const OrderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const { doRequest, errors } = UseRequest({
    url: '/api/payments',
    method: 'post',
    body: {
      orderId: order.id,
    },
    onSuccess: () => Router.push('/orders'),
  });

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };

    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  if (timeLeft < 0) {
    return <div>Order Expired</div>
  }

  const msLeft = new Date(order.expiresAt) - new Date();

  return <div>
    Time left to pay: {timeLeft} seconds
    <StripeCheckout 
      token={(token) => console.log(token)}
      stripeKey='pk_test_51R84rDQkCQTr1OVib0JBVg94ZaRENjKQaaRnTDHn1U9rLwUwI66FVsYjW8uD0yhNfoKaRrjE1odyVojixkkm9ONu00mhFPzHOt'
      amount={order.ticket.price * 100}
      email={currentUser.email}
    />
    </div>;
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;