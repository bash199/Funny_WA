import styled from "styled-components";
import {useState} from "react";
import Chihuahua from "./Images/Chihuahua.jpeg";
import Elpaso from "./Images/ElPaso.png";
import Alaska from "./Images/Alaska.png";
import NewMexico from "./Images/NewMexico.png";
import Bird from "./Images/bird.jpg";
const Div = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   text-align: center;
`;
const Div2 = styled.div`
   display: flex;
   justify-content: space-between;
   width: 300px;
`;
const Img = styled.img`
   width: 300px;
   height: 300px;
`;

const imgArr = [Chihuahua, Elpaso, Alaska, NewMexico, Bird];
const imgArrDecription = [
   "Little Bitches",
   "  'Q: How do you know that Michael Jackson is not dead? A: Hes still registered to vote in El Paso!'",
   "I thought I saw an eye doctor on an Alaskan island, but it turned out to be an optical Aleutian.",
   "Q: Why do all the trees in Arizona lean east? A: New Mexico Sucks",
   "Bitch Bird",
];
function App() {
   const [first, setFirst] = useState(0);
   const [second, setSecond] = useState(0);
   const [count, setCount] = useState(0);
   const [showImage, setShowImage] = useState(true);
   const func = () => {
      setFirst(first + 1);
      setCount((prev) => prev + 1);
      count > 3 ? setShowImage(false) : setShowImage(true);
   };
   const func2 = () => {
      setSecond(second + 1);
      setCount((prev) => prev + 1);
      count > 3 ? setShowImage(false) : setShowImage(true);
   };
   return (
      <Div>
         <Div2>
            <h1>&#128122;:{first}</h1>
            <h1>&#128512;:{second}</h1>
         </Div2>
         <div>
            {showImage && <Img src={imgArr[count]} />}
            {showImage && <p>{imgArrDecription[count]}</p>}
            {!showImage && (
               <h3>
                  {" "}
                  {first > second
                     ? "Will Its Your Problem You Have No humor"
                     : "Glad That I Could See These Teeth"}
               </h3>
            )}
         </div>
         <Div2>
            <button disabled={!showImage} onClick={func}>
               &#10134;
            </button>
            <button disabled={!showImage} onClick={func2}>
               &#10133;
            </button>
         </Div2>
      </Div>
   );
}

export default App;
