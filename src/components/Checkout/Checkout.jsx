import './Checkout.css'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';
import { getFirestore, collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, getTotal, clearCart } = useContext(CartContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [phone, setPhone] = useState("");
  const [collectionType, setCollectionType] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const handleForm = (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !emailConfirmation || !phone || !collectionType) {
      setError("Warning: you must complete all fields to make your purchase");
      return;
    }

    if (email !== emailConfirmation) {
      setError("Warning: emails do not match");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Warning: invalid email format");
      return;
    }

    const phoneRegex = /^\d{3} \d{3} \d{3}$/;
    if (!phoneRegex.test(phone)) {
      setError("Warning: phone number must be 9 digits, formatted as XXX XXX XXX");
      return;
    }

    if (collectionType === "delivery" && !address) {
      setError("Warning: address is required for delivery");
      return;
    }

    setError("");

    const db = getFirestore();
    const order = {
      items: cart.map((item) => ({
        id: item.dish.id,
        name: item.dish.name,
        price: item.dish.price,
        quantity: item.quantity,
        stock: item.dish.stock
      })),
      total: getTotal(),
      date: new Date(),
      firstName,
      lastName,
      email,
      emailConfirmation,
      phone,
      collectionType,
      address
    };

    Promise.all(
      order.items.map(async (dishOrder) => {
        const dishRef = doc(db, "dish", dishOrder.id);
        const dishDoc = await getDoc(dishRef);
        const stock = dishDoc.data().stock;
        await updateDoc(dishRef, {
          stock: stock - dishOrder.quantity
        });
      })
    ).then(() => {
      addDoc(collection(db, "order"), order)
        .then((docRef) => {
          setOrderId(docRef.id);
          clearCart();
        })
        .catch((error) => {
          console.error("Error adding order: ", error);
          setError("Invalid: the order could not be generated, please try again later");
        });
    })
      .catch((error) => {
        console.error("Error updating stock: ", error);
        setError("Invalid: the stock could not be updated, please try again later");
      })
  };

  const handlePhoneInput = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    const formattedPhone = input.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1 $2 $3').trim();
    setPhone(formattedPhone);
  };

  const handleKeyPress = (e) => {
    const charCode = e.charCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  };

  return (
    <div className='checkout-container'>
      <div className='order-container'>
        <div className='btn-back'>
          <Link to="/cart">
            <i className="fa-solid fa-arrow-left"></i><p>BACK</p>
          </Link>
        </div>
        <div className='order-detail-container'>
          <h2>Your order</h2>
          <div className='content-order-detail'>
            {cart.map((item) => (
              <div key={item.dish.id} className='info-order-detail'>
                <div className='order-detail-image'>
                  <img src={item.dish.image} alt={item.dish.name} />
                </div>
                <div className='order-detail-text'>
                  <h3>{""} {item.dish.name}</h3>
                  <p>{""} Price: S/ {item.dish.price.toFixed(2)}</p>
                  <p>{""} Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='total-container'>
            <p>Total: S/ {getTotal().toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className='info-container'>
        <h2>Pick up details</h2>
        <form onSubmit={handleForm} className='form-container'>
          <div className='flex-row'>
            <div className='form-field-container'>
              <label htmlFor="">First name</label>
              <input type="text" onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className='form-field-container'>
              <label htmlFor="">Last name</label>
              <input type="text" onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>
          <div className='flex-row'>
            <div className='form-field-container'>
              <label htmlFor="">Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='form-field-container'>
              <label htmlFor="">Email confirmation</label>
              <input type="email" onChange={(e) => setEmailConfirmation(e.target.value)} />
            </div>
          </div>
          <div className='flex-row'>
            <div className='form-field-container'>
              <label htmlFor="">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={handlePhoneInput}
                onKeyPress={handleKeyPress}
                maxLength="11"
              />
            </div>
            <div className='form-field-container'>
              <label htmlFor="">Collection type</label>
              <select id="collectionType" value={collectionType} onChange={(e) => setCollectionType(e.target.value)}>
                <option value="" disabled>Select an option</option>
                <option value="delivery">Delivery</option>
                <option value="atTheRestaurant">At the restaurant</option>
              </select>
            </div>
          </div>
          {collectionType === "delivery" && (
            <div className='flex-row'>
              <div className='form-field-container'>
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  required={collectionType === "delivery"}
                />
              </div>
            </div>
          )}
          {error && <p className='error-alert'>{error}</p>}
          {orderId && (
            <p className='success-alert'>Thank you for your order. Your order number is {orderId}</p>
          )}
          <div className='btn-container-pick-up'>
            <button type='submit' className='btn-pick-up'>Confirm pick up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;