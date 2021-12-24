import React from 'react'
import { Table, Image, Button, Icon } from 'semantic-ui-react'
import { map } from 'lodash'

import "./TableCategoryAdmin.scss"

export function TableCategoryAdmin(props) {
    const { categories } = props
    return (
        <Table className='table-category-admin'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Imagen</Table.HeaderCell>
                    <Table.HeaderCell>Categoria</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {map(categories, (category, index) => (
                    <Table.Row key={index}>
                        <Table.Cell>
                            <Image src={category.image} />
                        </Table.Cell>
                        <Table.Cell>
                            {category.title}
                        </Table.Cell>
                        <Actions category={category} />
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
}

function Actions(props) {
    const { category } = props

    return (
        <Table.Cell textAlign='right'>
            <Button icon onClick={() => console.log('Actualizar')}>
                <Icon name='pencil' />
            </Button>
            <Button icon negative onClick={() => console.log('Eliminar')}>
                <Icon name='close' />
            </Button>
        </Table.Cell>
    )
}