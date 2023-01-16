import React from 'react'
import { Link } from 'react-router-dom'

const HomeCRUD = () => {
  return (
    <section>
        <Link to='/createusers' >CreateUsers</Link>
        <Link to='/users' >Users</Link>
    </section>
  )
}

export default HomeCRUD