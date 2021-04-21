import React from 'react'
import { Switch, Route, Redirect } from 'react-router'


import Home from '../Components/Home/Home'
import PostItem from '../Components/Wishlist/PostItem'
import EditItem from '../Components/Wishlist/EditItem'
import GetItem from '../Components/Wishlist/GetItem'
import RemoveItem from '../Components/Wishlist/RemoveItem'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/addItem' component={PostItem} / >
        <Route path='/editItem' component={EditItem} / >
        <Route path='/getItem' component={GetItem} / >
            <Route path='/removeItem' component={RemoveItem} />
         <Redirect from='*' to='/' />
    </Switch>