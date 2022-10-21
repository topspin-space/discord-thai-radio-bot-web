import styled from "@emotion/styled";

interface IDropdownProps {
  content?: React.ReactNode;
  children: JSX.Element;
}

const ContainerStyled = styled.div`
  position: relative;
  display: inline-block;

  .dropdown-content {
    display: none;
    position: absolute;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    margin-left: 8px;
    margin-top: 3px;
    width: 9rem;
    z-index: 1;
  }

  &&:hover .dropdown-content {
    display: block;
  }
`;


function Dropdown(props: IDropdownProps) {
  const { children, content } = props
  return (
    <ContainerStyled>
       {children}
      <div className="dropdown-content">
        {content}
      </div>
    </ContainerStyled>
  )
}

export default Dropdown