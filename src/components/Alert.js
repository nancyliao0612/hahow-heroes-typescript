// import React, { useEffect } from "react";
// import styled from "styled-components";
// // import { useHeroesContext } from "../context/hero_context";

// const Alert = () => {
//   // const { isSaveClicked, alert, removeAlert } = useHeroesContext();
//   // const { type, msg } = alert;

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       removeAlert();
//     }, 3000);
//     return () => clearTimeout(timeout);
//   }, [isSaveClicked]);

//   return (
//     <Wrapper>
//       <p className={`alert alert-${type}`}>{msg}</p>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   display: flex;
//   align-item: center;
//   justify-content: center;
//   padding: 1rem 0;

//   .alert {
//     height: 2.5rem;
//     text-align: center;
//     font-size: 1.5rem;
//     border-radius: 0.25rem;
//     width: 20%;
//   }

//   .alert-danger {
//     color: #721c24;
//     background: #f8d7da;
//   }
//   .alert-success {
//     color: #155724;
//     background: #d4edda;
//   }
// `;

// export default Alert;
