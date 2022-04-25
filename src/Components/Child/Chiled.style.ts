import styled from 'styled-components';
import tw from 'tailwind-styled-components';


// const Header = styled.h1`
//    font-size:22px;
//    color:red;
// `;

const Continer = tw.div`
   bg-white
`;

const WarapperContainer = tw.div`
   max-w-7xl 
   mx-auto 
   text-center 
   py-12 
   px-4 
   sm:px-6 
   lg:py-16 
   lg:px-8
`;

const BigHeader = tw.h2`
  text-3xl 
  font-extrabold 
  tracking-tight 
  text-gray-900 
  sm:text-4xl
`

const Styled ={
    Continer,
    WarapperContainer,
    BigHeader
}

export default Styled;