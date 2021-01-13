import React, { useState } from 'react';
import { Input } from './input';

export const ControlledInput = () => {
    const [value, setValue] = useState('controlled input');
    return <Input value={value} onChange={(e) => {setValue(e.target.value)}} />
}