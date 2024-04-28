import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list'

export default function Dropdown() {

    const [selected, setSelected] = React.useState([])

    const data = [
        { key: '1', value: 'Mobiles', disabled: true },
        { key: '2', value: 'Appliances' },
        { key: '3', value: 'Cameras' },
        { key: '4', value: 'Computers', disabled: true },
        { key: '5', value: 'Vegetables' },
        { key: '6', value: 'Diary Products' },
        { key: '7', value: 'Drinks' },
    ]
    return (
        <SelectList
            boxStyles={{ borderColor: '#cfcfcf' }}
            setSelected={(val) => setSelected(val)}
            data={data}
            arrowicon={<Ionicons name="chevron-expand-outline" size={20} color="#868e96" />}
            save="value"
            //onSelect={() => alert(selected)}
            defaultOption={{key:1, value: 'Seciniz'}}
            
        />
    )
}

