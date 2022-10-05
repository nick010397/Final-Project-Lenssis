import React from 'react'
import styled from 'styled-components'

function NavBar() {
  return (
    <NavForm>
      <span>
        <div>
          <div>Lenssis</div>
          <button>login</button>
          <button>cart</button>
        </div>
      </span>
    </NavForm>
  )
}

const NavForm = styled.div`
  height: 80px;
  background-color: gray;
`

export default NavBar
