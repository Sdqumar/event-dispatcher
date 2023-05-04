import { PortableText } from '@portabletext/react';
import { useRef, useState } from 'react';
import styled from 'styled-components';

import useOnClickOutside from '../hooks/useOnClickOutside';

export default function Card(props: any) {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef(null);
  const handleButtonClick = () => {
    setShowMenu(true);
  };
  useOnClickOutside(ref, () => setShowMenu(false));
  return (
    <Wrapper>
      <div>
        <PortableText value={props.body} components={sanityComponents} />
      </div>
      <div onClick={handleButtonClick}>{props.actions.props.button}</div>
      <Menu ref={ref} showMenu={showMenu}>
        {props?.actions?.props?.menu}
      </Menu>
    </Wrapper>
  );
}
interface MENUI {
  showMenu: boolean;
}
const Menu = styled.div<MENUI>`
  position: absolute;
  right: 10px;
  top: 49px;
  display: ${(props: any) => (props.showMenu ? 'block' : 'none')};
`;
const Wrapper = styled.div`
  display: flex;
  background-color: #e8f1ff;
  color: #211747;
  padding: 15px;
  padding-left: 30px;
  border-radius: 8px;
  justify-content: space-between;
  align-items: flex-start;
`;
const Link = styled.span`
  color: #2cccd3;
`;
const linkComponent = (props: any) => {
  return <Link>{props.text}</Link>;
};
const sanityComponents = {
  marks: {
    link: linkComponent,
  },
};
