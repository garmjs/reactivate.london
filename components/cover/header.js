import React from 'react'
import styled from 'styled-components'

import rem from '../../styles/rem'
import { fontSizes, regularWeight } from '../../styles/fonts'

import Strip from '../base/strip'
import Headline from '../base/headline'
import Link from '../base/link'

const ColumnWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: ${rem(30)};

  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

const Column = styled.div`
  margin-left: 20px;

  @media (max-width: 450px) {
    margin-top: 20px;
    margin-left: 0;
  }
`

const FirstColumn = styled(Column)`
  max-width: ${rem(200)};
  margin-left: 0px;
`

const List = styled.ul`
  list-style-type: none;
  line-height: 1.4;
  padding: 0;
`

const CoverHeadline = styled(Headline)`
  margin: 0;
`

const Header = () => (
  <ColumnWrapper>
    <FirstColumn>
      <CoverHeadline>
        Mar
        <br/>
        27th
      </CoverHeadline>
    </FirstColumn>
    <Column>
      <Strip/>
      <List>
        <li>6:00pm - 8:30pm</li>
        <li>(doors open 5:45pm)</li>
        <li>Monday, March 27th</li>
        <li>Trainline HQ</li>
        <li>
          <Link href="https://citymapper.com/go/gvab8p" target="_blank" rel="noopener">
            Floor 3, 120 Holborn, EC1N 2TD
          </Link>
        </li>
      </List>
    </Column>
  </ColumnWrapper>
)

export default Header

