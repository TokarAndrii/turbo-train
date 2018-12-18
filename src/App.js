import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin'
import { OrderHistoryList, OrderHistoryCreate } from './orderHistory'
import jsonServerProvider from 'ra-data-json-server'

const dataProvider = jsonServerProvider("http://localhost:3001")

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="orderHistory" list={OrderHistoryList} edit={EditGuesser} create={OrderHistoryCreate} />
    <Resource name="comments" list={ListGuesser} />
    <Resource name="menu" list={ListGuesser} />
    <Resource name="categories" list={ListGuesser} />
  </Admin>)


export default App