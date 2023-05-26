import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
// import { useAuth } from "../Context/GlobalState";
import { db } from "../firebase";
function Order() {
  const [order, setOrder] = useState([]);
  //   const { user } = useAuth();

  useEffect(() => {
    const dbRef = collection(db, "orders");
    onSnapshot(dbRef, (docsSnap) => {
      docsSnap.forEach((Order) => {
        setOrder([Order.data(), ...order]);
      });
    });
  }, []);
  console.log(order);
  return <div>Order</div>;
}

export default Order;
