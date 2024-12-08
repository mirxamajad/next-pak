// "use client";
// import React, { useState, useEffect } from "react";
// import StringLang from "@/utilities/StringLang";
// import Image from "next/image";

// import BinanceImg from "@/public/assets/binancepay.jpg";

// function BankPayment({ paymentInfo, submitAction, products }) {
//   const [tnxId, setTnxId] = useState("");

//   // Initialize timeLeft with 60 minutes in seconds
//   const [timeLeft, setTimeLeft] = useState(60 * 60);

//   // State to control visibility of Binance Pay section
//   const [isBinancePayVisible, setIsBinancePayVisible] = useState(true);

//   useEffect(() => {
//     if (timeLeft <= 0 || !isBinancePayVisible) return;

//     const intervalId = setInterval(() => {
//       setTimeLeft((prevTime) => prevTime - 1);
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [timeLeft, isBinancePayVisible]);

//   useEffect(() => {
//     if (timeLeft === 0 && isBinancePayVisible) {
//       setIsBinancePayVisible(false);
//     }
//   }, [timeLeft, isBinancePayVisible]);

//   const formatTime = (seconds) => {
//     const hrs = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;
//     return `${hrs.toString().padStart(2, "0")}:${minutes
//       .toString()
//       .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
//   };

//   // Calculate the total price of all products
//   const totalPrice = products?.reduce((total, product) => {
//     return total + product.qty * Number(product.option_price);
//   }, 0).toFixed(2); // Format to 2 decimal places

//   return (
//     <div>
//       <div className="w-full border-primary-border-secondary bg-black rounded-[1px] p-1">
//         {/* Bank Information Section */}
//         <div className="flex">
//           <div className="flex flex-col">
//           <p className="w-[350px] text-left text-[12px] leading-[14px]">
//         <b>  If you wanna pay through Pagomóvil – Bank of Venezuela           </b>   </p>
//             <p className="text-xl font-bold text-white leading-8">
//               <StringLang string={"My Pagomóvil Bank Details Are Below"} />
          
//             </p>
       
//             <p>
//            <b>Bank Name:</b>Banco de Venezuela

// <br>
//               </br>
//             <b>ID:</b>27609994
//             </p>
//             <p>
//            <b>Phone:</b>04125712917<br>
//               </br>
//             </p>
//             <br>
//             </br>
//               <p className="text-white text-[20px] leading-[16px]">
//                   <span className="font-bold"><b>TOTAL: </b></span>
//                   ${totalPrice}
//                 </p>
//           </div>

//           {/* Binance Pay QR Code and Timer Section */}
//           {isBinancePayVisible && (
//             <div className="flex flex-col gap-2 items-end grow pr-5">
//               <p className="w-[130px] text-center text-[10px] leading-[14px]">
//                 If you wanna pay through Binance, Scan here!
//               </p>
//               <Image src={BinanceImg} alt="Binance Pay QR code" width={130} />

//               {/* Display Total Price for Each Product */}
//               {/* {products?.map((product) => (
//                 <div key={product.id} className="mt-2 text-center">
//                   <p className="text-white text-[10px] leading-[14px]">
//                     {product.variant_name}:{" "}
//                     <span className="font-bold">
//                       {product.qty} x ${Number(product.option_price).toFixed(2)} = ${(
//                         product.qty * Number(product.option_price)
//                       ).toFixed(2)}
//                     </span>
//                   </p>
//                 </div>
//               ))} */}

//               {/* Display TOTAL Price */}
//               <div className="w-[130px] text-center text-[10px] leading-[14px] mt-2">
//                 <p className="text-white text-[12px] leading-[16px]">
//                   <span className="font-bold">PAY: </span>
//                   ${totalPrice}
//                 </p>
//               </div>

//               {/* Timer Display */}
//               <div className="w-[130px] text-center text-[10px] leading-[14px] mt-2">
//                 {timeLeft > 0 ? (
//                   <>
//                    <p style={{ color: 'red' }}>Time left to pay:</p>

//                     <p className="font-bold">{formatTime(timeLeft)}</p>
//                   </>
//                 ) : (
//                   <p className="text-red-500">Payment time has expired.</p>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Transaction Information Section */}
//         <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
//           <div className="col-span-full w-full">
//             <p className="text-xl font-bold text-white leading-8 mb-5">
//               <StringLang string={"Your transaction information"} />
//             </p>
//             <div className="input-field h-[120px] relative">
//               <label className="text-sm text-white bg-black bg-opacity-30 absolute rtl:left-auto rtl:right-3 ltr:left-3 ltr:right-auto w-fit -top-[9px] flex px-[5px] h-fit items-center justify-center">
//                 Bank Details*
//               </label>
//               <textarea
//                 name="account_id"
//                 value={tnxId}
//                 onChange={(e) => setTnxId(e.target.value)}
//                 placeholder={paymentInfo}
//                 className="w-full h-full placeholder:whitespace-pre-wrap text-white p-3.5 rounded-[5px] bg-[#0B0E12] border border-[#23262B] px-4 focus:outline-none"
//               ></textarea>
//             </div>
//           </div>
          // <div className="w-full flex justify-end col-span-2">
          //   <button
          //     className={`w-fit ${timeLeft === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          //     onClick={() => {
          //       submitAction(tnxId);
          //     }}
          //     disabled={timeLeft === 0}
          //   >
          //     <div className="h-[54px] bg-primary-yellow text-primary-black flex justify-center items-center rounded-[5px] w-full px-5">
          //       <span className="text-lg font-semibold">Submit</span>
          //     </div>
          //   </button>
          // </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BankPayment;
"use client";
import React, { useState, useEffect } from "react";
import StringLang from "@/utilities/StringLang";
import Image from "next/image";

import BinanceImg from "@/public/assets/binancepay.jpg";

function BankPayment({ paymentInfo, submitAction, products }) {
  const [tnxId, setTnxId] = useState("");

  // Initialize timeLeft with 60 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(60 * 60);

  // State to control visibility of Binance Pay section
  const [isBinancePayVisible, setIsBinancePayVisible] = useState(true);

  useEffect(() => {
    if (timeLeft <= 0 || !isBinancePayVisible) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, isBinancePayVisible]);

  useEffect(() => {
    if (timeLeft === 0 && isBinancePayVisible) {
      setIsBinancePayVisible(false);
    }
  }, [timeLeft, isBinancePayVisible]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Calculate the total price of all products
  const totalPrice = products?.reduce((total, product) => {
    return total + product.qty * Number(product.option_price);
  }, 0).toFixed(2); // Format to 2 decimal places

  return (
    <div>
      <div className="w-full border-primary-border-secondary bg-black rounded-[1px] p-3">
        {/* Bank Information Section */}
        <div className="flex">
          <div className="flex flex-col mt-6 ">
            <p className="w-[350px] text-left text-[10px] leading-[12px]">
              <b>Si deseas pagar a través de Pagomóvil – Banco de Venezuela</b>
            </p>
            <p className="text-lg font-bold text-white leading-6 mt-3">
              <StringLang string={"Mis datos bancarios de Pagomóvil se encuentran a continuación"} />
            </p>
            <p className="mt-3">
              <b>Nombre del banco:</b> Banco de Venezuela
              <br />
              <b>ID:</b> 27609994
            </p>
            <p>
              <b>Phone:</b> 04125712917
              <br />
            </p>
            <p className="text-white text-[26px] leading-[16px] mt-4">
              <span className="font-bold">
                <b>TOTAL: </b>
              </span>
              ${totalPrice}
            </p>
          </div>

          {/* Binance Pay QR Code and Timer Section */}
          {isBinancePayVisible && (
            <div className="flex flex-col gap-1 items-end grow pr-5">
              <p className="w-[130px] text-center text-[10px] leading-[14px]">
              Si quieres pagar a través de Binance ¡Escanea aquí!
              </p>
              <Image src={BinanceImg} alt="Binance Pay QR code" width={130} />

              {/* Display Total Price for Each Product */}
              <div className="w-[130px] text-center text-[10px] leading-[14px] mt-1">
                <p className="text-white text-[12px] leading-[14px]">
                  <span className="font-bold">TOTAL PAY: </span>${totalPrice}
                </p>
              </div>

              {/* Timer Display */}
              <div className="w-[130px] text-center text-[10px] leading-[14px] mt-1">
                {timeLeft > 0 ? (
                  <>
                    <p style={{ color: 'red' }}>Tiempo restante para pagar:</p>
                    <p className="font-bold">{formatTime(timeLeft)}</p>
                  </>
                ) : (
                  <p className="text-red-500">El tiempo de pago ha expirado.</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Transaction Information Section */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-1">
          <div className="col-span-full w-full">
            <p className="text-lg font-bold text-white leading-6 mb-3">
              <StringLang string={"Your transaction information"} />
            </p>
            <div className="input-field h-[100px] relative">
              <label className="text-sm text-white bg-black bg-opacity-30 absolute rtl:left-auto rtl:right-3 ltr:left-3 ltr:right-auto w-fit -top-[9px] flex px-[5px] h-fit items-center justify-center">
              Confirmación de pago*
              </label>
              <textarea
                name="account_id"
                value={tnxId}
                onChange={(e) => setTnxId(e.target.value)}
                placeholder={paymentInfo}
                className="w-full h-[80px] placeholder:whitespace-pre-wrap text-white p-3.5 rounded-[5px] bg-[#0B0E12] border border-[#23262B] px-4 focus:outline-none"
              ></textarea>
            </div>
          </div>
        
              <div className="w-full flex justify-end col-span-2">
            <button
              className={`w-fit ${timeLeft === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={() => {
                submitAction(tnxId);
              }}
              disabled={timeLeft === 0}
            >
              <div className="h-[54px] bg-primary-yellow text-primary-black flex justify-center items-center rounded-[5px] w-full px-5">
                <span className="text-lg font-semibold">Entregar</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankPayment;
