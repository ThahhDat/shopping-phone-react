import React, { useState } from 'react';
import { WrapperInputStyler } from './style';

const InputForm = (props) => {
    const [valueInput] = useState(''); // Chỉ sử dụng valueInput mà không cần setValueInput
    const { placeholder = 'datdat0704@gmail.com', ...rests } = props;

    return (
        <WrapperInputStyler
            placeholder={placeholder}
            value={valueInput}
            {...rests}
        />
    );
};

export default InputForm;
