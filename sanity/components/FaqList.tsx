import 'rc-collapse/assets/index.css';

import { PortableText } from '@portabletext/react';
import Collapse from 'rc-collapse';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import client from '../config/sanityClient';
import useOnClickOutside from '../hooks/useOnClickOutside';
const Panel = Collapse.Panel;
export default function FaqList(props: any) {
  const [question, setQuestion] = useState<any>([]);
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef(null);
  const handleButtonClick = () => {
    setShowMenu(true);
  };
  useOnClickOutside(ref, () => setShowMenu(false));
  useEffect(() => {
    Promise.all(
      (props?.body || [])
        ?.filter((item: any) => item?._ref)
        ?.map((item: any) =>
          client.fetch(
            `*[_type == $typeDoc  && _id == $refId ]{question , answer}`,
            { typeDoc: 'faq', refId: item?._ref },
          ),
        ),
    )
      .then((result) => {
        setQuestion(result);
      })
      .catch(console.error);
  }, [props]);
  return (
    <Wrapper>
      <Heading>FAQs</Heading>
      <Collapse accordion={true}>
        {question.map((item: any, index: number) => (
          <Panel
            key={index}
            header={item?.[0]?.question}
            headerClass="acc-opener"
            showArrow={false}
          >
            <PortableText
              value={item?.[0]?.answer}
              components={sanityComponents}
            />
          </Panel>
        ))}
      </Collapse>
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

const Menu = styled.div<MENUI>`
  position: absolute;
  right: 10px;
  top: 35px;
  display: ${(props: any) => (props.showMenu ? 'block' : 'none')};
`;

const Wrapper = styled.div`
  background-color: #eafafb;
  font-size: 20px;
  line-height: 175%;
  display: flex;
  color: #211747;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;

  .rc-collapse {
    flex-grow: 1;
    flex-basis: 0;
    background: none;
    border: none;
    border-radius: 0;

    .rc-collapse-item {
      border-top: none;
      border-bottom: 1px solid rgba(3, 130, 136, 0.5);
    }

    .rc-collapse-header {
      font-size: 18px;
      line-height: 1;
      font-weight: 700;
      color: #038288;
      padding: 10px 0;
      border-bottom: 1px solid rgba(3, 130, 136, 0.5);
    }

    .rc-collapse-content {
      padding: 0;
      border-bottom: 1px solid rgba(3, 130, 136, 0.5);
      background: none;
      font-size: 14px;
      line-height: 175%;
      color: #211747;
    }

    .rc-collapse-content-box {
      padding: 10px 0;
      margin: 0;
    }
  }
`;

const Heading = styled.div`
  font-size: 30px;
  line-height: 115%;
  letter-spacing: -0.02em;
  width: 26.28%;
  padding: 20px 15px 0 0;
`;
