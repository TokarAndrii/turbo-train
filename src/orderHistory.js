import React from 'react'
import {
    List, Datagrid, TextField, DateField, NumberField, EditButton, Filter, TextInput,
    NumberInput, SimpleForm, DateInput, LongTextInput, Create
} from 'react-admin'

const OrderHistoryFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search by id" source="id" alwaysOn />
    </Filter>
);


export const OrderHistoryCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <DateInput source='date' />
            <NumberInput source='price' options={{ maximumFractionDigits: 2 }} />
            <LongTextInput source="address" />
            <NumberInput source='rating' />
        </SimpleForm>
    </Create>
)

export const OrderHistoryList = props => (
    <List {...props} filters={<OrderHistoryFilter />}>
        <Datagrid rowClick="edit">
            <DateField source='date' />
            <NumberField source="price" options={{ maximumFractionDigits: 2 }} />
            <TextField source="address" />
            <NumberField source="rating" />
            <EditButton />
        </Datagrid>

    </List >
)