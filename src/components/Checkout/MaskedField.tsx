import React from 'react';
import InputMask from 'react-input-mask';
import * as S from '../CartSidebar/styles';

const MaskedField: React.FC<MaskedFieldProps> = ({
    mask,
    name,
    value,
    onChange,
    onBlur,
    placeholder,
    className
}) => {
    return (
        <InputMask
            mask={mask}
            maskChar={null}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        >
            {(inputProps: any) => (
                <S.FormInput
                    {...inputProps}
                    name={name}
                    placeholder={placeholder}
                    className={className}
                />
            )}
        </InputMask>
    );
};

export default MaskedField;