import axios from "axios";

function Payment() {
  async function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to Load");
      return;
    }

    const result = await axios.post(
      "http://localhost:3001/payment/orders",
      { amount: 50000 }
    );

    if (!result) {
      alert("Server error");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_Sj00D4SfcQ88sp",
      amount: amount.toString(),
      currency: currency,
      name: "JCC",
      description: "College Fees",
      order_id: order_id,

      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          "http://localhost:3001/payment/success",
          data
        );

        alert(result.data.message);
      },

      prefill: {
        name: "Akshit",
        email: "akshit@jimsindia.com",
        contact: "+91 **********",
      },

      theme: {
        color: "#009988",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div>
      <button onClick={displayRazorpay}>
        Pay ₹500
      </button>
    </div>
  );
}

export default Payment;