import React, { useRef } from 'react'
import { BookOpen, Info, AlertTriangle, GitHub, Linkedin } from 'react-feather'
import styled from 'styled-components'
import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg'
// import { useActiveWeb3React } from '../../hooks'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useToggleModal } from '../../state/application/hooks'

import { ExternalLink } from '../../theme'
// import { ButtonPrimary } from '../Button'

const StyledMenuIcon = styled(MenuIcon)`
  path {
    stroke: ${({ theme }) => theme.text1};
  }
`

const StyledMenuButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: ${({ theme }) => theme.bg3};

  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => theme.bg4};
  }

  svg {
    margin-top: 2px;
  }
`

const StyledMenu = styled.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`

const MenuFlyout = styled.span`
  min-width: 8.125rem;
  background-color: ${({ theme }) => theme.bg1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
  position: absolute;
  top: 4rem;
  right: 0rem;
  z-index: 100;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    top: -17.25rem;
  `};
`

const MenuItem = styled(ExternalLink)`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({ theme }) => theme.text2};
  :hover {
    color: ${({ theme }) => theme.text1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`

const CODE_LINK = 'https://github.com/Coinvesting-DeFi/'

export default function Menu() {
  // const { account } = useActiveWeb3React()

  const node = useRef<HTMLDivElement>()
  const open = useModalOpen(ApplicationModal.MENU)
  const toggle = useToggleModal(ApplicationModal.MENU)
  useOnClickOutside(node, open ? toggle : undefined)
  // const openClaimModal = useToggleModal(ApplicationModal.ADDRESS_CLAIM)

  return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    <StyledMenu ref={node as any}>
      <StyledMenuButton onClick={toggle}>
        <StyledMenuIcon />
      </StyledMenuButton>

      {open && (
        <MenuFlyout>
          <MenuItem id="link" href="https://coinvestingdefi.medium.com/coinvesting-defi-dex-2b95f56428a0">
            <Info size={13} />
            About
          </MenuItem>          
          <MenuItem id="link" href="https://ipfs.io/ipfs/QmatfvdyqwL4iXJ7UfTDs1LtWdcAjifyvapkF1nZoMJWMG">
            <AlertTriangle size={13} />
            Disclaimer
          </MenuItem>
          <MenuItem id="link" href={CODE_LINK}>
            <GitHub size={13} />
            GitHub
          </MenuItem>
          <MenuItem id="link" href="https://coinvestingdefi.medium.com/coinvesting-defi-team-adabc769d399">
            <Linkedin size={13} />
            Team
          </MenuItem>  
          <MenuItem id="link" href="https://ipfs.io/ipfs/QmVq4b7q5aHFedRUqzGjR3PdogXjqyxiXtiemGT33gnvb8">
            <BookOpen size={13} />
            Whitepaper
          </MenuItem>
          {/* <MenuItem id="link" href="https://uniswap.info/">
            <PieChart size={13} />
            Analytics
          </MenuItem> */}
          {/* {account && (
            <ButtonPrimary onClick={openClaimModal} padding="8px 16px" width="100%" borderRadius="12px" mt="0.5rem">
              Claim COINVEX
            </ButtonPrimary>
          )} */}
        </MenuFlyout>        
      )}      
    </StyledMenu>
  )
}
