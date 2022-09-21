import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css';
import Map from '../components/Map';
import MapLeaflet from '../components/MapLeaflet';
import useGoogleAddress from '../hooks/useGoogleAddress';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  
  return (
    <div className="Success">
      {buyer.map((item, key) => (
        <div className="Success-content">
          <h2> {`${item.name} Gracias por tu compra`}</h2>
          <span> tu pedido</span>
        </div>
      ))}
    </div>
  );
};

export default Success;
